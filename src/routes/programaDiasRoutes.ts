import express, { Router } from 'express';
import programaDiasController from '../controllers/programaDiasController';

class ProgramaDiasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
       
        this.router.get('/', programaDiasController.list);
        this.router.get('/:id', programaDiasController.getOne);
        this.router.post('/', programaDiasController.create);
        this.router.put('/:id', programaDiasController.update);
        this.router.delete('/:id', programaDiasController.delete);
    }

}

export default new ProgramaDiasRoutes().router;

