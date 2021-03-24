import mongoose from "mongoose";

async function dbConnect() {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    return await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
  } catch (err) {
    if (err) throw Error("Errore di connessione al DB");
  }
}

export default dbConnect;
