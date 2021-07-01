import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"

import { AlunoRepository } from "../repositories/AlunoRepository"
import { CursoRepository } from "../repositories/CursoRepository"
import { SolicitacaoRepository } from "../repositories/SolicitacaoRepository"
import { DisciplinaRepository } from "../repositories/DisciplinaRepository"
import { AnexoRepository } from "../repositories/AnexoRepository"

class SolicitacaoController{

    async create(request: Request, response: Response){

        const { 
            nome, 
            matricula,
            email,
            telefone,
            justificativa,
            id_curso, 
            tipo_solicitacao,
            professor,
            data_atividade,
            disciplina
        } = JSON.parse(request.body.data)
        
        const cursoRepository = getCustomRepository(CursoRepository)
        const curso = await cursoRepository.findOne({ id: id_curso })

        const alunoRepository = getCustomRepository(AlunoRepository)
        const alunoAlreadyExists = await alunoRepository.findOne({ matricula })

        const solicitacaoRepository = getCustomRepository(SolicitacaoRepository)
        const disciplinaRepository = getCustomRepository(DisciplinaRepository)
        

        const anexoRepository = getCustomRepository(AnexoRepository)

        if(alunoAlreadyExists){
            
            const solicitacao = solicitacaoRepository.create({
                id_aluno: alunoAlreadyExists.id,
                justificativa: justificativa,
                data_solicitacao: Date.now(),
                status: "Encaminhado"
            })

            await solicitacaoRepository.save(solicitacao)

            const registro_disciplina = disciplinaRepository.create({
                id_solicitacao: solicitacao.id,
                data_atividade: data_atividade,
                tipo_solicitacao: tipo_solicitacao,
                professor: professor,
                disciplina: disciplina,
            })

            await disciplinaRepository.save(registro_disciplina)

            const arquivos = request.files

            const files = (arquivos as Array<object>).map((file:any)=>{
                return { id_solicitacao : solicitacao.id, id_recurso: null, caminho: file.filename }
            })

            const anexos = (await anexoRepository.createQueryBuilder().insert().values(files).execute())
            return response.status(200).json({ ...alunoAlreadyExists, ...solicitacao, ...registro_disciplina, anexos_ids: anexos.generatedMaps})    
        }
        else
        {
            const aluno  = alunoRepository.create({
                nome: nome,
                matricula: matricula,
                email: email,
                telefone,
                id_curso: curso.id, 
            })

            await alunoRepository.save(aluno)

            const solicitacao = solicitacaoRepository.create({
                id_aluno: aluno.id,
                justificativa: justificativa,
                data_solicitacao: Date.now(),
                status: "Encaminhado"
            })

            await solicitacaoRepository.save(solicitacao)

            const registro_disciplina = disciplinaRepository.create({
                id_solicitacao: solicitacao.id,
                data_atividade: data_atividade,
                tipo_solicitacao: tipo_solicitacao,
                professor: professor,
                disciplina: disciplina,
            })

            const arquivos = request.files

            const files = (arquivos as Array<object>).map((file:any)=>{
                return { id_solicitacao : solicitacao.id, id_recurso: null, caminho: file.filename }
            })
            
            const anexos = (await anexoRepository.createQueryBuilder().insert().values(files).execute())
            return response.status(200).json({ ...aluno, ...solicitacao, ...registro_disciplina, anexos_ids: anexos.generatedMaps})               
        }
    }

}

export { SolicitacaoController }