import { createConnection } from "typeorm";
import {ENTITY} from "../entity";

export const conection = createConnection({
    type:"postgres",
    host:"localhost",
    port:5432,
    database:"projeto_final_angular",
    username:"postgres",
    password:"12345",
    logging: true,
    entities:ENTITY
})