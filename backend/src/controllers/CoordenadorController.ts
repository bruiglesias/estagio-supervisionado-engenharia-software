import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { CoordenadorRepository } from "../repositories/CoordenadorRepository"

import * as bcrypt from 'bcrypt'
import { JWTController } from "./JWTController"

const jwtController = new JWTController()

class CoordenadorController{

    async create(request: Request, response: Response){
        const { id_curso, nome , usuario, senha } = request.body
        
        const coordenadorRepository = getCustomRepository(CoordenadorRepository)
        const coordenadorAlreadyExists = await coordenadorRepository.findOne({ usuario })

        if(coordenadorAlreadyExists){
            return response.status(400).json({ error: "O usuário já existe"})
        }
        const coordenador = coordenadorRepository.create({ id_curso, nome, usuario, senha })
        await coordenadorRepository.save(coordenador)
        coordenador.senha = null
        return response.status(200).json(coordenador)
    }

    async show(request: Request, response: Response){
        const coordenadorRepository = getCustomRepository(CoordenadorRepository)
        const all = await coordenadorRepository.find()
        return response.status(200).json(all) 
    }

    async findById(request: Request, response: Response){
        const { id } = request.body
        const coordenadorRepository = getCustomRepository(CoordenadorRepository)
        const coordenador = await coordenadorRepository.findOne({ id })

        if(!coordenador){
            return response.status(400).json({ error: "Coordenador não encontrado"})
        }
        coordenador.senha = null
        return response.status(200).json(coordenador) 
    }

    async findByName(request: Request, response: Response){
        const { nome } = request.body
        const coordenadorRepository = getCustomRepository(CoordenadorRepository)
        const coordenador = await coordenadorRepository.findOne({ nome })

        if(!coordenador){
            return response.status(400).json({ error: "Coordenador não encontrado"})
        }
        coordenador.senha = null
        return response.status(200).json(coordenador) 
    } 

    async login(request: Request, response:Response){
        const { usuario, senha } = request.body
        const coordenadorRepository = getCustomRepository(CoordenadorRepository)

        const coordenador = await coordenadorRepository.findOne({ usuario: usuario })
        if (coordenador) {

            const senhaValidada = await bcrypt.compare(senha, coordenador.senha)
            
            if (senhaValidada) {
                const token = jwtController.createToken(coordenador)
                coordenador.senha = null
                response.status(200).json({ auth: true, token: token, coordenador: coordenador })
            } else {
                response.status(400).json({ error: "Senha inválida" })
            }

        } else {
            response.status(401).json({ error: "Usuário não existe" })
        }
    }
}

export { CoordenadorController }