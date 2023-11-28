import mongoose from "mongoose";
import app from "./app";
import { MONGO_URI } from "./constants";

(async () => {
  console.log("Connecting to MongoDB");
  await mongoose.connect(MONGO_URI);
  console.log("MongoDB has been connected");

  app.listen(3000, () => console.log("Server is running"));
})();
