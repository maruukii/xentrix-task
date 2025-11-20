import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken, generateRefreshToken } from "../utils/auth.util.js";
import jwt from "jsonwebtoken";
import { promisify } from "util";

const verifyJwt = promisify(jwt.verify);

export async function signup(userData) {
  try {
    const { email, businessName, officeAddress, password, postCode } = userData;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const CreatedUser = new User({
      email,
      businessName,
      officeAddress,
      postCode,
      password: hashedPassword,
    });
    const savedUser = await CreatedUser.save();

    const token = generateToken(savedUser);
    const refresh = generateRefreshToken(savedUser);
    savedUser.refreshToken = refresh;
    await savedUser.save();

    return { savedUser, token, refresh };
  } catch (error) {
    throw new Error(error);
  }
}

export async function signin(email, password) {
  try {
    var found = await User.findOne({ email: email });
    if (!found) {
      throw new Error("User not Found");
    } else {
      const isPasswordMatch = await bcrypt.compare(password, found.password);
      if (isPasswordMatch) {
        const token = generateToken(found);
        const refresh = generateRefreshToken(found);
        found.refreshToken = refresh;
        await found.save();
        return { token, refresh, found };
      } else {
        throw new Error("Wrong Password");
      }
    }
  } catch (error) {
    console.error("Error:", error.message);
    throw new Error(error.message);
  }
}

export async function logout(cookies) {
  if (!cookies?.jwt) throw new Error("No refresh token provided");
  const refreshToken = cookies.jwt;
  const foundUser = await User.findOne({ refreshToken: refreshToken });

  if (!foundUser) {
    throw new Error("User not found");
  }
  foundUser.refreshToken = "";
  await foundUser.save();
  return "token cleared";
}

export async function me(email) {
  const foundUser = await User.findOne({ email: email });
  if (!foundUser) {
    throw new Error("User not found");
  }
  return {
    user: foundUser,
  };
}

export async function refreshToken(cookies) {
  if (!cookies?.jwt) {
    throw new Error("No refresh token provided");
  }

  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken });
  if (!foundUser) {
    throw new Error("User not found");
  }

  let decoded;
  try {
    decoded = await verifyJwt(refreshToken, process.env.JWT_REFRESH_SECRET_KEY);
  } catch (err) {
    throw new Error("Invalid or expired refresh token");
  }

  const newAccessToken = generateToken(foundUser);

  return {
    token: newAccessToken,
  };
}
