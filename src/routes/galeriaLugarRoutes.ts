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
        this.router.put('/:id',  multer.single("imagen"),galeriaLugarController.update);
    }

}

export default new GaleriaLugarRoutes().router;

