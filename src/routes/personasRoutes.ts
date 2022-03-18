import express, { Router } from 'express';

import personasController from '../controllers/personasController';

class PersonasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', personasController.list);
        this.router.get('/:id', personasController.getOne);
        this.router.post('/', personasController.create);
        this.router.put('/:id', personasController.update);
        this.router.delete('/:id', personasController.delete);
    }

}

export default new PersonasRoutes().router;

