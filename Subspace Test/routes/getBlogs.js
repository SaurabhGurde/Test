import express from "express";
import { getBlogs, getSearchBlog } from "../controller/getBlogs.js";

const router = express.Router();

router.get('/blog-stat', getBlogs);
router.get('/blog-search', getSearchBlog)

export default router;