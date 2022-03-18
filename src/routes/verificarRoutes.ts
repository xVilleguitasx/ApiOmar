import { Router } from "express";
import multer from "../libs/storageComprobantes";
import verificarController from "../controllers/verificarController";

class VerificarRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.put("/:id", multer.single("foto_deposito"), verificarController.update);
  }
}

export default new VerificarRoutes().router;
