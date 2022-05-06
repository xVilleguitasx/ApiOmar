import express, { Router } from 'express';
import multer from "../libs/storagePrograma";
import programaController from '../controllers/programaController';

class ProgramaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', programaController.list);
        this.router.get('/:id', programaController.getOne);
        this.router.post('/',multer.single("imagen"), programaController.create);
        this.router.put('/:id',multer.single("imagen"), programaController.update);
        this.router.delete('/:id', programaController.delete);
    }

}

export default new ProgramaRoutes().router;

