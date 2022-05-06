import express, { Router } from 'express';

import termarioTemasController from '../controllers/termarioTemasController';

class TemarioTemasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', termarioTemasController.list);
        this.router.get('/:id', termarioTemasController.getOne);
        this.router.post('/', termarioTemasController.create);
        this.router.put('/:id', termarioTemasController.update);
        this.router.delete('/:id', termarioTemasController.delete);
    }

}

export default new TemarioTemasRoutes().router;

