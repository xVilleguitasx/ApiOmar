import express, { Router } from 'express';

import idiomaController from '../controllers/idiomaController';

class IdiomaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', idiomaController.list);
        this.router.get('/:id', idiomaController.getOne);
        this.router.post('/', idiomaController.create);
        this.router.put('/:id', idiomaController.update);
        this.router.delete('/:id', idiomaController.delete);
    }

}

export default new IdiomaRoutes().router;

