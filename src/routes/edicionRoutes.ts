import express, { Router } from "express";
import multer from "../libs/storageEdiciones";
import edicionController from "../controllers/edicionController";
class EdicionRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    var cpUpload = multer.fields([
      { name: "imagen", maxCount: 1 },
      { name: "pdf", maxCount: 1 },
    ]);
    this.router.get("/", edicionController.list);
    this.router.post("/", cpUpload, edicionController.create);
    this.router.put("/:id", cpUpload, edicionController.update);
  }
}

export default new EdicionRoutes().router;
