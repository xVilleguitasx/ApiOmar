import  { Router } from "express";
import multer from "../libs/storageConfiReportes";
import confiReportesController from "../controllers/confiReportesController";
class EdicionRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    var cpUpload = multer.fields([
      { name: "logo", maxCount: 1 },
      { name: "banner", maxCount: 1 },
    ]);
    this.router.get("/", confiReportesController.list);
    this.router.put("/:id", cpUpload, confiReportesController.update);
  }
}

export default new EdicionRoutes().router;
