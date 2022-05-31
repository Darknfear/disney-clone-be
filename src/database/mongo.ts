import mongoose from "mongoose";
import getConfigDatabase from "@helpers/database.helper";

const connectMongoose = async (): Promise<void> => {
  try {
    const { db_name, host, port } = getConfigDatabase("mongo");
    await mongoose.createConnection(`mongodb:${host}:${port}/${db_name}`, {
      maxPoolSize: 10,
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoose;
