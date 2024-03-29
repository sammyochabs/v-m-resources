import mongoose, { Connection, connections } from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
