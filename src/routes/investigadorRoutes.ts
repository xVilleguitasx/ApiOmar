import { Router } from "express";
import multer from "../libs/storageConferencistas";
import investigadorController from "../controllers/investigadorController";
class InvestigadorRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    var cpUpload = multer.fields([
      { name: "foto", maxCount: 1 },
      { name: "pdf", maxCount: 1 },
    ]);
    this.router.get("/", investigadorController.list);
    this.router.post("/", cpUpload, investigadorController.create);
    this.router.put("/:id", cpUpload, investigadorController.update);
    this.router.delete("/:id", investigadorController.delete);
  }
}

export default new InvestigadorRoutes().router;
