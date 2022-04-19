import express, { Router } from 'express';

import usuariosController from '../controllers/usuariosController';

class UsuariosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.post('/', usuariosController.create);
    }

}

export default new UsuariosRoutes().router;

