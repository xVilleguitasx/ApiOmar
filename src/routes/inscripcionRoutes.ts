import { Router } from 'express';

import inscripcionController from '../controllers/inscripcionController';

class InscipcionRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', inscripcionController.list);
        this.router.get('/:id', inscripcionController.getOne);
        this.router.post('/',inscripcionController.create);
        this.router.put('/:id', inscripcionController.update);
        this.router.delete('/:id', inscripcionController.delete);
    }

}

export default new InscipcionRoutes().router;

