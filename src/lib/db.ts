import mongoose from "mongoose";

const MONGO_STRING = process.env.MONGO_STRING;

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.Promise = global.Promise;
mongoose
  .connect(MONGO_STRING, mongoOptions)
  .then(() => {
    console.info("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error while connecting to MongoDB:", err.message);
  });
