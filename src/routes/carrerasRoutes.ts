import express, { Router } from 'express';

import carrerasController from '../controllers/carrerasController';

class CarrerasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', carrerasController.list);
        this.router.get('/:id', carrerasController.getOne);
        this.router.post('/', carrerasController.create);
        this.router.put('/:id', carrerasController.update);
        this.router.delete('/:id', carrerasController.delete);
    }

}

export default new CarrerasRoutes().router;

