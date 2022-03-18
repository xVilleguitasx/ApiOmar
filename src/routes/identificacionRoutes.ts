import express, { Router } from 'express';

import identificacionController from '../controllers/identificacionController';

class IdentificacionRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', identificacionController.list);
        this.router.get('/:id', identificacionController.getOne);
        this.router.post('/', identificacionController.create);
        this.router.put('/:id', identificacionController.update);
        this.router.delete('/:id', identificacionController.delete);
    }

}

export default new IdentificacionRoutes().router;

