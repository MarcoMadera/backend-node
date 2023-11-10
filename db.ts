import db from "mongoose";

export default async function connect(mongo_uri: string): Promise<void> {
  try {
    await db.connect(mongo_uri);

    console.log("[db] Connected");
  } catch (error) {
    console.log("Error connecting to db", error);
  }
}
