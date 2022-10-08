import mongoose from "mongoose";

const DB_URL = process.env.NEXT_PUBLIC_DB_URL;

if (!DB_URL) {
  throw new Error("Please define the DB_URL env variable");
}

// @ts-ignore
let cached = global.mongoose; // store gobal.mongoose in a variable because we
// don't want to connect to the database in a loop.

if (!cached) {
  // @ts-ignore
  cached = global.mongoose = { conn: null, promise: null }; // if cached doesn't
  // exist then connection will be non existant.
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // @ts-ignore
    cached.promise = mongoose.connect(DB_URL, options).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;
