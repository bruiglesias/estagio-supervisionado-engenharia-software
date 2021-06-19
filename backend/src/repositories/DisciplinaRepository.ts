import { EntityRepository, Repository } from "typeorm";
import { Disciplina } from "../models/Disciplina"

@EntityRepository(Disciplina)
class DisciplinaRepository extends Repository<Disciplina>{}

export { DisciplinaRepository }