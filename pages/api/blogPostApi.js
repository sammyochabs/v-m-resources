import dbConnect from "../../utils/dbConnection";
import blogPostModel from "../../models/blogPostModel";

export default async function (req, res) {
  const method = req.method;

  try {
    await dbConnect();
  } catch (err) {
    res.status(400).json({ err: err });
  }

  if (method === "POST") {
    try {
      let newBlogPost = await blogPostModel.create(req.body);
      res.status(200).json({ message: "success" });
    } catch (err) {
      res.status(400).json({ m: err });
    }
  } else if (method === "GET") {
    try {
      let allBlogPosts = await blogPostModel.find({});
      res.status(200).json({ allBlogPosts: allBlogPosts });
    } catch (err) {
      res.status(400).json({ err: err });
    }
  } else if (method === "DELETE") {
    try {
      let deletedPost = await blogPostModel.deleteOne({
        title: req.body.title,
      });
      res.status(200).json({ message: deletedPost.n });
    } catch (err) {
      res.status(401).json({ err: err });
    }
  }
}
