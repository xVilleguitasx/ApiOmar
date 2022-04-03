import  { Router } from "express";
import multer from "../libs/storageConfiReportes";
import confiReportesController from "../controllers/confiReportesController";
class EdicionRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
   
    this.router.get("/", confiReportesController.list);
    this.router.put("/:id", multer.single("logo"), confiReportesController.update);
  }
}

export default new EdicionRoutes().router;
