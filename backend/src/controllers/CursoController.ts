import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { CursoRepository } from "../repositories/CursoRepository"


class CursoController{

    async create(request: Request, response: Response){
        const { nome } = request.body
        
        const cursoRepository = getCustomRepository(CursoRepository)
        const cursoAlreadyExists = await cursoRepository.findOne({ nome })

        if(cursoAlreadyExists){
            return response.status(400).json({ error: "O curso já existe"})
        }
        const curso = cursoRepository.create({ nome })
        await cursoRepository.save(curso)
        return response.status(200).json(curso)
    }

    async show(request: Request, response: Response){
        const cursoRepository = getCustomRepository(CursoRepository)
        const all = await cursoRepository.find()
        return response.status(200).json(all) 
    }

    async findById(request: Request, response: Response){
        const { id } = request.body
        const cursoRepository = getCustomRepository(CursoRepository)
        const curso = await cursoRepository.findOne({ id })

        if(!curso){
            return response.status(400).json({ error: "O Curso não existe"})
        }
        return response.status(200).json(curso) 
    }

    async findByName(request: Request, response: Response){
        const { nome } = request.body
        const cursoRepository = getCustomRepository(CursoRepository)
        const curso = await cursoRepository.findOne({ nome })

        if(!curso){
            return response.status(400).json({ error: "O Curso não existe"})
        }
        return response.status(200).json(curso) 
    } 
}

export { CursoController }