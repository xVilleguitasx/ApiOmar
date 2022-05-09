import express, { Router } from 'express';
import multer from "../libs/storageEnvioTrabajosFormatos";
import envioTrabajosFormatosController from '../controllers/envioTrabajosFormatosController';

class EnvioTrabajosFormatosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', envioTrabajosFormatosController.list);
        this.router.get('/:id', envioTrabajosFormatosController.getOne);
        this.router.post('/',multer.single("boton"), envioTrabajosFormatosController.create);
        this.router.put('/:id',multer.single("boton"), envioTrabajosFormatosController.update);
        this.router.delete('/:id', envioTrabajosFormatosController.delete);
    }

}

export default new EnvioTrabajosFormatosRoutes().router;

