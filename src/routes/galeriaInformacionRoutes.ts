import express, { Router } from 'express';
import multer from "../libs/storageGaleria";
import galeriaInformacionController from '../controllers/galeriaInformacionController';

class GaleriaLugarRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', galeriaInformacionController.list);
        this.router.get('/:id', galeriaInformacionController.getOne);
        this.router.post('/',multer.single("imagen"), galeriaInformacionController.create);
        this.router.put('/:id',multer.single("imagen"), galeriaInformacionController.update);
        this.router.delete('/:id', galeriaInformacionController.delete);
    }

}

export default new GaleriaLugarRoutes().router;

