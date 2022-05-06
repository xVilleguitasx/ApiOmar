import express, { Router } from 'express';
import enviotrabajosFechasController from '../controllers/enviotrabajosFechasController';

class EnvioTrabajosFechasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', enviotrabajosFechasController.list);
        this.router.get('/:id', enviotrabajosFechasController.getOne);
        this.router.post('/', enviotrabajosFechasController.create);
        this.router.put('/:id', enviotrabajosFechasController.update);
        this.router.delete('/:id', enviotrabajosFechasController.delete);
    }

}

export default new EnvioTrabajosFechasRoutes().router;

