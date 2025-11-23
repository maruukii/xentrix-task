import mongoose from "mongoose";
import moment from "moment-timezone";

const { Schema } = mongoose;

const PropertySchema = new Schema({
  image: {
    type: String,
  },
  propertyName: {
    type: String,
    required: [true, "Please enter the property name"],
  },
  address: {
    type: String,
    required: [true, "Please enter the address"],
  },
  city: {
    type: String,
    required: [true, "Please enter the city"],
  },
  country: {
    type: String,
    required: [true, "Please enter the country"],
  },
  postCode: {
    type: String,
    required: [true, "Please enter the post code"],
  },
  reference: {
    type: String,
    required: [true, "Please enter a reference"],
  },
  value: {
    type: Number,
    required: [true, "Please enter the property value"],
  },
  type: {
    type: String,
    enum: ["House", "Apartment", "Condo", "Commercial", "Land"],
    required: [true, "Please enter the property type"],
  },
  access: {
    type: String,
    enum: ["Private", "Shared", "Public Road"],
    required: [true, "Please enter the access information"],
  },
  dimension: {
    type: Number,
    required: [true, "Please enter the dimension"],
  },
  bedrooms: {
    type: Number,
    required: [true, "Please enter number of bedrooms"],
  },
  bathrooms: {
    type: Number,
    required: [true, "Please enter number of bathrooms"],
  },
  floors: {
    type: Number,
    required: [true, "Please enter number of floors"],
  },
  features: {
    garden: {
      type: Boolean,
      default: false,
    },
    garage: {
      type: Boolean,
      default: false,
    },
    parking: {
      type: Boolean,
      default: false,
    },
  },
  status: {
    type: String,
    enum: ["Sale", "Let"],
  },
  createdAt: {
    type: String,
    default: () =>
      moment().utcOffset("+01:00").format("YYYY-MM-DD HH:mm:ss [GMT]Z"),
  },
  modifiedAt: {
    type: String,
  },
});

PropertySchema.pre("save", function (next) {
  this.modifiedAt = moment()
    .utcOffset("+01:00")
    .format("YYYY-MM-DD HH:mm:ss [GMT]Z");
  next();
});

PropertySchema.post("save", function (doc, next) {
  console.log("Property saved");
  next();
});

const Property = mongoose.model("Property", PropertySchema);
export default Property;
