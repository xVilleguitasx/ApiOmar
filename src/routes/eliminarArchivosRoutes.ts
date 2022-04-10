import  { Router } from "express";
import eliminarArchivosController from "../controllers/eliminarArchivosController";
class EliminarArchivosRutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {

    this.router.post("/", eliminarArchivosController.eliminar);
  }
}

export default new EliminarArchivosRutes().router;
