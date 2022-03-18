import express, { Router } from 'express';

import configuracionController from '../controllers/configuracionController';

class ConfiguracionRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', configuracionController.list);
        this.router.put('/:id', configuracionController.update);
    }

}

export default new ConfiguracionRoutes().router;

