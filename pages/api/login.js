import dbConnect from "../../utils/dbConnection";
import { sign } from "jsonwebtoken";
import adminModel from "../../models/adminModel";
const cookie = require("cookie");
const bcrypt = require("bcrypt");

export default async function (req, res) {
  try {
    await dbConnect();
  } catch (err) {
    res.json({ message: "error connecting to database" });
  }

  const method = req.method;

  if (method === "POST") {
    console.log(req.body);
    await adminModel.find(
      { username: req.body.username.toLowerCase() },
      async function (err, siteUser) {
        if (err) {
          res.json({ message: "something went wromg pls try again..." });
        } else if (siteUser.length < 1) {
          res.json({ message: "not registered" });
        } else if (siteUser.length > 0) {
          bcrypt.compare(req.body.password, siteUser[0].password, function (
            err,
            result
          ) {
            if (!err && result) {
              const claims = {
                sub: siteUser[0].id,
                siteUsersName: siteUser[0].username.toLowerCase(),
              };
              const jwt = sign(claims, process.env.SECRET, {
                expiresIn: "1h",
              });

              res.setHeader(
                "Set-Cookie",
                cookie.serialize("adminAuth", jwt, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV !== "development",
                  maxAge: 3600,
                  path: "/",
                })
              );

              res.json({ message: "success" });
            } else {
              res.json({
                message: "oops... something went wrong please try again",
              });
            }
          });
        }
      }
    );
  }
}
