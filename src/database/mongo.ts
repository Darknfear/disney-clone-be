import mongoose from "mongoose";
import getConfigDatabase from "@helpers/database.helper";

const connectMongoose = async (): Promise<void> => {
  try {
    const { db_name, host, port } = getConfigDatabase("mongo");
    await mongoose.connect(
      `mongodb:${host}:${port}/${db_name}`
    );
  } catch (error) {
    console.log(error);
  }
};


export default connectMongoose;
