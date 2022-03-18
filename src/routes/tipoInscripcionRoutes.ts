import express, { Router } from 'express';

import tipoInscripcionController from '../controllers/tipoInscripcionController';

class tipoInscripcionRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', tipoInscripcionController.list);
        this.router.get('/:id', tipoInscripcionController.getOne);
        this.router.post('/', tipoInscripcionController.create);
        this.router.put('/:id', tipoInscripcionController.update);
        this.router.delete('/:id', tipoInscripcionController.delete);
    }

}

export default new tipoInscripcionRoutes().router;

