import express, { Router } from 'express';

import tipoComiteController from '../controllers/tipoComiteController';

class TipoComiteRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', tipoComiteController.list);
       
    }

}

export default new TipoComiteRoutes().router;

