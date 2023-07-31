import jwt from "jsonwebtoken";


const CheckAuthMiddleware = (req, res, next) => {
  try {
    if (req.headers.hasOwnProperty("authorization")) {
      const token = req?.headers?.authorization.split(" ")[1];

      jwt.verify(token, process.env.JWT_SECRET);

      return next();
    } else {
      throw new Error();
    }
  } catch (e) {
    return "please sign in";
  }
};
export default CheckAuthMiddleware;
