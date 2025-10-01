const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

// Serve(use) static files
app.use(express.static(path.join(__dirname, "/public")));

//Set view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//Parse JSON Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGO_URL = "mongodb://127.0.0.1:27017/travii";

main().then(() => {
  console.log("DB Connection Successful");
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

//Home Route
app.get("/", (req, res) => {
  res.send("Home Page");
});

//Index Route All Listing
app.get("/listings", async (req, res) => {
  let listings = await Listing.find();
  res.render("listings/index.ejs", { listings });
});

//New Listing
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//POST request to /listings so that new listing data from the form actually gets saved to your database.
app.post("/listings", async (req, res) => {
  let newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});

//Show Route
app.get("/listings/:id/show",(req, res)=>{
  
})

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
