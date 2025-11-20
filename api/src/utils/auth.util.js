import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET_KEY;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET_KEY;

export function generateToken(user) {
  const payload = {
    email: user.email,
    businessName: user.businessName,
  };

  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: "10s" });
}
export function generateRefreshToken(user) {
  const payload = {
    email: user.email,
    businessName: user.businessName,
  };

  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: "15s" });
}

export function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: Missing token." });
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: Invalid token format." });
  }

  jwt.verify(token, ACCESS_SECRET, (err, payload) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, message: "Invalid or expired token." });
    }

    req.user = payload;

    next();
  });
}
