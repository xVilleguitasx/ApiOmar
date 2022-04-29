import express, { Router } from 'express';
import multer from "../libs/storageInformacionTuristica";
import informacionTuristicaController from '../controllers/informacionTuristicaController';

class GaleriaLugarRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        var cpUpload = multer.fields([
            { name: "boton1", maxCount: 1 },
            { name: "boton2", maxCount: 1 },
          ]);
        this.router.get('/', informacionTuristicaController.list);
        this.router.get('/:id', informacionTuristicaController.getOne);
        this.router.post('/',cpUpload, informacionTuristicaController.create);
        this.router.put('/:id',cpUpload, informacionTuristicaController.update);
        this.router.delete('/:id', informacionTuristicaController.delete);
    }

}

export default new GaleriaLugarRoutes().router;

