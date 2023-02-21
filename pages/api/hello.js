export default function handler(req, res, next) {
  return res.status(400).json({ message: "Welcome message" });
}
