import express, { Router } from 'express';

import adminInscripController from '../controllers/adminInscripController';

class AdminInscripRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', adminInscripController.list);
        this.router.post('/getInscripcionByCI', adminInscripController.getInscripcionByCI);
        this.router.put('/:id', adminInscripController.update);
    }

}

export default new AdminInscripRoutes().router;

