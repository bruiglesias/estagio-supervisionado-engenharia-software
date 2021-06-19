import { EntityRepository, Repository } from "typeorm";
import { Coordenador } from "../models/Coordenador"

@EntityRepository(Coordenador)
class CoordenadorRepository extends Repository<Coordenador>{}

export { CoordenadorRepository }