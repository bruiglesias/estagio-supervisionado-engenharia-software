import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { SolicitacaoRepository } from "../repositories/SolicitacaoRepository"
import { AnexoRepository } from "../repositories/AnexoRepository"
import { RecursoRepository } from '../repositories/RecursoRepository'


class RecursoController{

    async create(request: Request, response: Response){

        const { 
            justificativa,
            id_solicitacao, 
        } = JSON.parse(request.body.data)
        
        const solicitacaoRepository = getCustomRepository(SolicitacaoRepository)
        const solicitacaoAlreadyExists = await solicitacaoRepository.findOne({ id: id_solicitacao })

        if(!solicitacaoAlreadyExists){
            return response.status(400).json({ error: "A solicitação informada não existe"})
        }

        const recursoRepository = getCustomRepository(RecursoRepository)
        const recursoAlreadyExists = await recursoRepository.findOne({ id: id_solicitacao })
        
        if(recursoAlreadyExists){
            return response.status(200).json({ error: "Já existe um recurso para esta solicitação."})
        }

        const recurso = recursoRepository.create({
            id_solicitacao: solicitacaoAlreadyExists.id,
            justificativa: justificativa,
        })

        await recursoRepository.save(recurso)

        await solicitacaoRepository.update({ id: solicitacaoAlreadyExists.id}, { status: "Recurso enviado" })
        
        const anexoRepository = getCustomRepository(AnexoRepository)

        const arquivos = request.files

        const files = (arquivos as Array<object>).map((file:any)=>{
            return { id_solicitacao : null, id_recurso: recurso.id, caminho: file.filename }
        })

        const anexos = (await anexoRepository.createQueryBuilder().insert().values(files).execute())
        return response.status(200).json({ recurso, anexos_ids: anexos.generatedMaps})    

    }

}

export { RecursoController }