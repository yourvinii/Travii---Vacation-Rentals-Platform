const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/travii";

main().then(() => {
  console.log("DB Connection Successful");
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({ ...obj, owner: "68f9d1f0965413d26612d851" }));
  await Listing.insertMany(initData.data);
  console.log("Data was Initialized ");
};
initDB();
