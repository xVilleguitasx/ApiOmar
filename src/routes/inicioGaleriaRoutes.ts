import express, { Router } from 'express';
import inicioGaleriaController from '../controllers/inicioGaleriaController';
import multer from "../libs/storageInicioGaleria";
class ProgramaDiasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
       
        this.router.get('/', inicioGaleriaController.list);
        this.router.get('/:id', inicioGaleriaController.getOne);
        this.router.post('/',multer.single("imagen"), inicioGaleriaController.create);
        this.router.put('/:id',multer.single("imagen"), inicioGaleriaController.update);
        this.router.delete('/:id', inicioGaleriaController.delete);
    }

}

export default new ProgramaDiasRoutes().router;

