const cookie = require("cookie");

export default async function (req, res) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("adminAuth", "", {
      maxAge: -1,
      path: "/",
    })
  );

  res.writeHead(302, { Location: "/" });
  res.end();
}
