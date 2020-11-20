import adminModel from "../../models/adminModel";
import dbConnect from "../../utils/dbConnection";
const bcrypt = require("bcrypt");

export default async function (req, res) {
  console.log(req.body);
  try {
    await dbConnect();
  } catch (err) {
    res.status(400).json({ err: "error connecting to database" });
  }

  const method = req.method;
  const saltRounds = 10;

  let { username, password } = req.body;
  if (username) {
    username = username.toLowerCase();
    req.body.username = username.toLowerCase();
  }

  let hashedPassword = "";

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      hashedPassword = hash;
      req.body.password = hash;
    });
  });

  if (username.length < 1 || password.length < 1) {
    res.json({ message: "please fill all fields" });
  } else if (method === "POST") {
    try {
      await adminModel.find({ username: req.body.username }, async function (
        err,
        users
      ) {
        if (err) {
          res.json({ error: err });
        }
        if (users.length > 0) {
          res.json({
            message: "the username is already taken, try using another one",
          });
        } else if (users.length < 1) {
          if (hashedPassword !== "") {
            const newUser = await adminModel.create(req.body);
            res.status(201).json({ message: "success" });
          } else if (hashedPassword === "") {
            res.json({
              message:
                "there seem to be a problem please try again in a few minutes time",
            });
          }
        }
      });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }
}
