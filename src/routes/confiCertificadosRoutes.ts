import express, { Router } from 'express';
import multer from "../libs/storageConfiCertificados";
import confiCertificadosController from '../controllers/confiCertificadosController';

class ConfiCertificadosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', confiCertificadosController.list);
        this.router.post('/',multer.single("plantilla"), confiCertificadosController.create);
        this.router.put('/:id', confiCertificadosController.update);
        this.router.delete('/:id',multer.single("plantilla"), confiCertificadosController.delete);
    }

}

export default new ConfiCertificadosRoutes().router;

