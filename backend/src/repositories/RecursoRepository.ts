import { EntityRepository, Repository } from "typeorm";
import { Recurso } from "../models/Recurso"

@EntityRepository(Recurso)
class RecursoRepository extends Repository<Recurso>{}

export { RecursoRepository }