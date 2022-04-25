import express, { Router } from 'express';

import galeriaLugarController from '../controllers/galeriaLugarController';
import multer from "../libs/storageGaleria";
class GaleriaLugarRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', galeriaLugarController.list);
        this.router.get('/:id', galeriaLugarController.getOne);
        this.router.post('/', multer.single("imagen"), galeriaLugarController.create);
        this.router.put('/:id',  multer.single("imagen"),galeriaLugarController.update);
        this.router.delete('/:id', galeriaLugarController.delete);
    }

}

export default new GaleriaLugarRoutes().router;

