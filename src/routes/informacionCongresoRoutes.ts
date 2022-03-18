import { Router } from 'express';

import informacionCongresoController from '../controllers/informacionCongresoController';

class InformacionCongresoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', informacionCongresoController.list);
        this.router.get('/:id', informacionCongresoController.getOne);
        this.router.post('/', informacionCongresoController.create);
        this.router.put('/:id', informacionCongresoController.update);
        this.router.delete('/:id', informacionCongresoController.delete);
    }

}

export default new InformacionCongresoRoutes().router;

