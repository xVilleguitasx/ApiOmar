import express, { Router } from 'express';
import multer from "../libs/storagePrograma";
import programDetalleController from '../controllers/programaDetalleController';

class ProgramaDetalleRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
       
        this.router.get('/', programDetalleController.list);
        this.router.get('/:id', programDetalleController.getOne);
        this.router.post('/', programDetalleController.create);
        this.router.put('/:id', programDetalleController.update);
        this.router.delete('/:id', programDetalleController.delete);
    }

}

export default new ProgramaDetalleRoutes().router;

