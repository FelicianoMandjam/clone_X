import { Tweet } from '../models/index.js'
import { ENV } from "../config/env.js";

const tweetsDummy = [
    {
        "userId": 1,
        "content": "Just finished a great workout! Feeling fantastic.",
        "media": "https://example.com/image1.jpg",
        "likeId": 1
    },
    {
        "userId": 1,
        "content": "Loving the new album by my favorite artist. 🎶",
        "media": "https://example.com/image2.jpg",
        "likeId": 1
    },
    {
        "userId": 1,
        "content": "Can't wait for the weekend! Any fun plans?",
        "likeId": 1
    },
    {
        "userId": 1,
        "content": "Check out this amazing sunset I captured today.",
        "media": "https://example.com/image3.jpg",
        "likeId": 1
    },
    {
        "userId": 1,
        "content": "Anyone have book recommendations? I'm looking for something new to read.",
        "likeId": 1
    }
];

export const add = async (req , res , next) => {
    try {
      await Tweet.create({
        ...req.body,
      });
      res.status(200).json("Tweet has been sent!");
    } catch (e) {
      console.log(e);
      next(e.message);
    }
  }