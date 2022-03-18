import { Router } from "express";
import multer from "../libs/storageFacturas";
import facturaController from "../controllers/facturaController";

class FacturaRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.put("/:id", multer.single("factura"), facturaController.update);
  }
}

export default new FacturaRoutes().router;
