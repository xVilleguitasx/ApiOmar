import express, { Router } from 'express';

import paraleloController from '../controllers/paraleloController';

class ParaleloRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', paraleloController.list);
        this.router.get('/:id', paraleloController.getOne);
        this.router.post('/', paraleloController.create);
        this.router.put('/:id', paraleloController.update);
        this.router.delete('/:id', paraleloController.delete);
    }

}

export default new ParaleloRoutes().router;

