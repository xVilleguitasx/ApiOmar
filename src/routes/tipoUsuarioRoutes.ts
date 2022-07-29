import express, { Router } from 'express';

import tipoUsuarioController from '../controllers/tipoUsuarioController';

class TipoUsuarioRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', tipoUsuarioController.list);
    }

}

export default new TipoUsuarioRoutes().router;

