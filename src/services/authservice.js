import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByEmail } from "./userservice.js";
import { NotFoundException, UnauthorizedException } from "../tool/error/index.js";



const loginUser = async (payload) => {
  const user = await findUserByEmail(payload.email);

  if (!user) throw new NotFoundException("email not found");

  const match = await bcrypt.compare(payload.password, user.password);

  if (!match) throw new UnauthorizedException("email/password is incorrect");

  const jwtToken = jwt.sign(
    {
      userId: user.id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: `${process.env.JWT_VALIDITY_HOURS}h`,
    }
  );

  return jwtToken;
};

export default loginUser;
