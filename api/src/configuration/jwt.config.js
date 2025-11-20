import crypto from "crypto";
//Generate random secret key
const secretKey = crypto.randomBytes(32).toString("hex");
export default secretKey;
