import express, { Router } from 'express';

import semestresController from '../controllers/semestresController';

class SemestresRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', semestresController.list);
        this.router.get('/:id', semestresController.getOne);
        this.router.post('/', semestresController.create);
        this.router.put('/:id', semestresController.update);
        this.router.delete('/:id', semestresController.delete);
    }

}

export default new SemestresRoutes().router;

