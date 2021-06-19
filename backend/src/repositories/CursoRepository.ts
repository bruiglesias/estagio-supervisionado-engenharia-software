import { EntityRepository, Repository } from "typeorm";
import { Curso } from "../models/Curso"

@EntityRepository(Curso)
class CursoRepository extends Repository<Curso>{}

export { CursoRepository }