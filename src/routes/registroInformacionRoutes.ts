import express, { Router } from 'express';
import multer from "../libs/storageRegistroInformacion";
import registroInformacionController from '../controllers/registroInformacionController';

class RegistroInformacionRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', registroInformacionController.list);
        this.router.get('/:id', registroInformacionController.getOne);
        this.router.post('/',multer.single("imagen"), registroInformacionController.create);
        this.router.put('/:id',multer.single("imagen"), registroInformacionController.update);
        this.router.delete('/:id', registroInformacionController.delete);
    }

}

export default new RegistroInformacionRoutes().router;

