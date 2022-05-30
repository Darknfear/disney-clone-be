import { EnvKey } from '@constants/env.constant';
import { ITypeDatabase } from '@interfaces/database.interface';
const database: Partial<ITypeDatabase> = {
  mongo: {
    host: process.env[`${EnvKey.DB_HOST}`] || "localhost",
    port: process.env[`${EnvKey.DB_PORT}`] || "27017",
    db_name: process.env[`${EnvKey.DB_NAME}`] || "disney-clone",
  },
};

export default database;