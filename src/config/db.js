import mongoose from "mongoose";

const mongoDBConnect = () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connect to MongoDB successfully!");
    })
    .catch((err) => {
      console.error("Error when connect to MongoDB: ", err);
      throw err;
    });
};
export default mongoDBConnect;
