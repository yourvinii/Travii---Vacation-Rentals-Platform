const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner } = require("../middleware.js");
const { validateListing } = require("../middleware.js");
const listingController = require("../controller/listings.js");

//Index Route All Listing
router.get("/", wrapAsync(listingController.index));

//New Listing
router.get("/new", isLoggedIn, listingController.renderNewForm);

//Create Route
router.post(
  "/",
  validateListing,
  isLoggedIn,
  wrapAsync(listingController.createListing)
);

//Show Route
router.get("/:id", wrapAsync(listingController.showListing));

// Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

//Update route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(listingController.updateListing)
);

//Delete Route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.destroyListing)
);

module.exports = router;
