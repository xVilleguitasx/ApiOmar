import express, { Router } from 'express';

import confiCertificadosController from '../controllers/confiCertificadosController';

class ConfiCertificadosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', confiCertificadosController.list);
        this.router.post('/', confiCertificadosController.create);
        this.router.put('/:id', confiCertificadosController.update);
        this.router.delete('/:id', confiCertificadosController.delete);
    }

}

export default new ConfiCertificadosRoutes().router;

