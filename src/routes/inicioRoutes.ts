import express, { Router } from 'express';
import inicioController from '../controllers/inicioController';
import multer from "../libs/storageInicio";
class InicioRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
       
        this.router.get('/', inicioController.list);
        this.router.get('/:id', inicioController.getOne);
        this.router.post('/',multer.single("imagen_llamado"), inicioController.create);
        this.router.put('/:id',multer.single("imagen_llamado"), inicioController.update);
        this.router.delete('/:id', inicioController.delete);
    }

}

export default new InicioRoutes().router;

