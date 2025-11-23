import { signupSchema } from "../schemas/user.schema.js";
import * as authService from "../services/auth.service.js";
const isProduction = process.env.NODE_ENV === "production";

export async function signup(req, res) {
  try {
    const result = signupSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json(result);
    }
    const validatedData = result.data;
    const { savedUser, token, refresh } = await authService.signup(
      validatedData
    );
    res.cookie("jwt", refresh, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: isProduction,
      sameSite: isProduction ? "none" : "",
    });
    res.status(201).json({
      success: true,
      data: {
        user: savedUser,
        accessToken: token,
      },
      message: "User Created Successfully",
    });
  } catch (error) {
    console.error("Signup Error:", error);

    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
}

export async function signin(req, res) {
  try {
    const { email, password } = req.body;
    const { token, refresh, found } = await authService.signin(email, password);
    res.cookie("jwt", refresh, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: isProduction,
      sameSite: isProduction ? "none" : "",
    });
    res.json({
      success: true,
      data: {
        user: found,
        accessToken: token,
      },
      message: "Signed in successfully",
    });
  } catch (error) {
    if (
      error.message === "User not Found" ||
      error.message === "Wrong Password"
    ) {
      return res.status(404).json({ success: false, message: error.message });
    }
    res.status(500).json({ success: false, message: error.message });
  }
}
export async function logout(req, res) {
  try {
    const cookies = req.cookies;
    const status = await authService.logout(cookies);
    res.clearCookie("jwt", { httpOnly: true });
    res.json({ success: true, status });
  } catch (error) {
    console.error("Error during logout:", error.message);
    res.status(500).json({ success: false, message: "Invalid refresh token" });
  }
}

export async function me(req, res) {
  try {
    const { user } = await authService.me(req.user.email);

    res.status(200).json({ success: true, data: { user } });
  } catch (error) {
    console.error("Error during token refresh:", error.message);
    res.status(401).json({ success: false, message: "Invalid refresh token" });
  }
}

export async function refreshToken(req, res) {
  try {
    const cookies = req.cookies;
    const { token } = await authService.refreshToken(cookies);

    res.status(200).json({ success: true, data: { accessToken: token } });
  } catch (error) {
    console.error("Error during token refresh:", error.message);
    res.status(401).json({ success: false, message: "Invalid refresh token" });
  }
}
