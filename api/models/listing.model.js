import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: true,
    },

    description: {
      type: String,
      requried: true,
    },

    address: {
      type: String,
      requried: true,
    },
    regularPrice: {
      type: Number,
      requried: true,
    },
    discountPrice: {
      type: Number,
      requried: true,
    },
    bathrooms: {
      type: Number,
      requried: true,
    },
    bedrooms: {
      type: Number,
      requried: true,
    },
    furnished: {
      type: Boolean,
      requried: true,
    },
    parking: {
      type: String,
      requried: true,
    },
    offer: {
      type: Boolean,
      requried: true,
    },
    imageUrls: {
      type: Array,
      requried: true,
    },
    userRef: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
