const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/travii";

main().then(() => {
  console.log("DB Connection Successful");
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

const sampleListing = new Listing({
  title: "Jumeirah Burj Al Arab",
  description:
    "Duplex One Bedroom Suite, Complimentary Access to Wild Wadi Waterpark",
  image:
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price: 45554,
  location: "733 Beatty Street, Vancouver, British Columbia V6B 2M4",
  country: "Canada",
});

sampleListing.save().then((res) => {
  console.log(res);
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
