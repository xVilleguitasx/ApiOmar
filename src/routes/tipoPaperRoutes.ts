import express, { Router } from 'express';

import tipoPaperController from '../controllers/tipoPaperContreoller';

class TipoPaperRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', tipoPaperController.list);
        this.router.get('/:id', tipoPaperController.getOne);
        this.router.post('/', tipoPaperController.create);
        this.router.put('/:id', tipoPaperController.update);
        this.router.delete('/:id', tipoPaperController.delete);
    }

}

export default new TipoPaperRoutes().router;

