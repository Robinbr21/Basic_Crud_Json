import express from "express";
import controller from "../controller/index";

const router = express.Router();

router.get("/getbooks", controller.bookController.getBook);
router.get("/bookbyid", controller.bookController.bookbyid);
router.post("/addnew", controller.bookController.addnew);
router.post("/update", controller.bookController.update);
router.post("/delete", controller.bookController.deleteing);


module.exports = router;
