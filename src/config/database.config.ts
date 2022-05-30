import { EnvKey } from '@constants/env.constant';
import { ITypeDatabase } from '@interfaces/database.interface';
const Database: ITypeDatabase = {
  mongo: {
    host: process.env[`${EnvKey.DB_HOST}`] || "localhost",
    port: process.env[`${EnvKey.DB_PORT}`] || "27017",
    db_name: process.env[`${EnvKey.DB_NAME}`] || "disney-clone",
  },
  mysql: {
    host: process.env[`${EnvKey.DB_HOST}`] || "localhost",
    port: process.env[`${EnvKey.DB_PORT}`] || "3306",
    username: process.env[`${EnvKey.USER_NAME_DB}`] || "root",
    password: process.env[`${EnvKey.PASSWORD_DB}`] || "",
    db_name: process.env[`${EnvKey.DB_NAME}`] || "disney-clone",
  },
};

export default Database;