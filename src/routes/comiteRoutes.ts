import express, { Router } from 'express';

import comiteController from '../controllers/comiteController';

class ComiteRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', comiteController.list);
        this.router.get('/:id', comiteController.getOne);
        this.router.post('/', comiteController.create);
        this.router.put('/:id', comiteController.update);
        this.router.delete('/:id', comiteController.delete);
    }

}

export default new ComiteRoutes().router;

