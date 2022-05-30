import express, { Router } from 'express';
import programaJornadaController from '../controllers/programaJornadaController';

class ProgramaJornadaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
       
        this.router.get('/', programaJornadaController.list);
        this.router.get('/:id', programaJornadaController.getOne);
        this.router.post('/', programaJornadaController.create);
        this.router.put('/:id', programaJornadaController.update);
        this.router.delete('/:id', programaJornadaController.delete);
    }

}

export default new ProgramaJornadaRoutes().router;

