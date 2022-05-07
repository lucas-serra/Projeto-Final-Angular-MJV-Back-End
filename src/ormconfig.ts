import { Funcionario } from "./entity/funcionario";

export const config = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'projeto_final_angular',
  entities: ['src/entity/*.ts'],
  migrations: ['src/migration/*{.ts,.js}'],
	cli: {
		entitiesDir: 'src/entity',
		migrationsDir: 'src/database/migrations'
	},
  synchronize: true,
}


