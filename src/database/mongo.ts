import mongoose from "mongoose";
import database from '@config/database.config';
import { ITypeDatabase, IMongoConfig } from "@interfaces/database.interface";

const connectMongoose = async (): Promise<void> => {
  try {
    const databaseName = getConfigDatabase("mongo");
    await mongoose.connect(
      `mongodb:${databaseName?.host}:${databaseName?.port}/${databaseName?.db_name}`
    );
  } catch (error) {
    console.log(error);
  }
};

const getConfigDatabase = <K extends keyof ITypeDatabase>(
  type: K
) => database[type];
export default connectMongoose;
