import express, { Router } from 'express';

import PaperController from '../controllers/paperController';

class PaperRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', PaperController.list);
        this.router.get('/:id', PaperController.getOne);
        this.router.post('/', PaperController.create);
        this.router.put('/:id', PaperController.update);
        this.router.delete('/:id', PaperController.delete);
    }

}

export default new PaperRoutes().router;

