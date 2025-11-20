import mongoose from "mongoose";
import moment from "moment-timezone";

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter your Email"],
  },
  businessName: {
    type: String,
    required: [true, "Please Enter your Company Name"],
  },
  officeAddress: {
    type: String,
    required: [true, "Please Enter your Office Address"],
  },
  postCode: {
    type: String,
    required: [true, "Please Enter your Post Code"],
  },
  avatar: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
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

UserSchema.pre("save", function (next) {
  this.modifiedAt = moment()
    .utcOffset("+01:00")
    .format("YYYY-MM-DD HH:mm:ss [GMT]Z");
  next();
});

UserSchema.post("save", function (doc, next) {
  console.log("User saved ");
  next();
});

const User = mongoose.model("User", UserSchema);
export default User;
