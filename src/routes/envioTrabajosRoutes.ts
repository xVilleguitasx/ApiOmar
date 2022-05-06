import express, { Router } from 'express';
import envioTrabajosController from '../controllers/envioTrabajosController';

class EnvioTrabajosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', envioTrabajosController.list);
        this.router.get('/:id', envioTrabajosController.getOne);
        this.router.post('/', envioTrabajosController.create);
        this.router.put('/:id', envioTrabajosController.update);
        this.router.delete('/:id', envioTrabajosController.delete);
    }

}

export default new EnvioTrabajosRoutes().router;

