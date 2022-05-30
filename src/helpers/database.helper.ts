import database from "@config/database.config";
import { ITypeDatabase } from "@interfaces/database.interface";

const getConfigDatabase = <K extends keyof ITypeDatabase>(type: K) =>
  database[type];
export default getConfigDatabase;
