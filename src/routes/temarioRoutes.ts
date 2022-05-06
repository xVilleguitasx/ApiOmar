import express, { Router } from 'express';

import temarioController from '../controllers/temarioController';

class TemarioRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', temarioController.list);
        this.router.get('/:id', temarioController.getOne);
        this.router.post('/', temarioController.create);
        this.router.put('/:id', temarioController.update);
        this.router.delete('/:id', temarioController.delete);
    }

}

export default new TemarioRoutes().router;

