const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressErr = require("./utils/ExpressErr");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");



// Serve(use) static files
app.use(express.static(path.join(__dirname, "/public")));

//Set view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//Parse JSON Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Method Override
app.use(methodOverride("_method"));

// use ejs-locals for all ejs templates
app.engine("ejs", ejsMate);

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

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

// Catch-all route for 404
// ✅ Works in Express 5
app.use((req, res, next) => {
  next(new ExpressErr(404, "Page Not Found"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
  // res.status(statusCode).send(message);
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
