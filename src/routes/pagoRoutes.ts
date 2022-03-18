import express, { Router } from 'express';

import pagoController from '../controllers/pagoController';

class PagoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', pagoController.list);
        this.router.get('/:id', pagoController.getOne);
        this.router.post('/', pagoController.create);
        this.router.put('/:id', pagoController.update);
        this.router.delete('/:id', pagoController.delete);
    }

}

export default new PagoRoutes().router;

