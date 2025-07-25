import express from "express";

const router = express.Router();
import {
  postInfo,
  getInfo,
  addInfo,
} from "../controller/contact.controller.js";

router.post("/post", postInfo);
router.get("/get", getInfo);
router.post("/add/client", addInfo);

export default router;
