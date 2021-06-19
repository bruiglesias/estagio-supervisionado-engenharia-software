import { EntityRepository, Repository } from "typeorm";
import { Anexo } from "../models/Anexo"

@EntityRepository(Anexo)
class AnexoRepository extends Repository<Anexo>{}

export { AnexoRepository }