import express, { Router } from 'express';
import multer from "../libs/storagePatrocinadores";
import patrocinadoresController from '../controllers/patrocinadoresController';

class PatrocinadorRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', patrocinadoresController.list);
        this.router.get('/:id', patrocinadoresController.getOne);
        this.router.post('/',multer.single("imagen"), patrocinadoresController.create);
        this.router.put('/:id',multer.single("imagen"), patrocinadoresController.update);
        this.router.delete('/:id', patrocinadoresController.delete);
    }

}

export default new PatrocinadorRoutes().router;

