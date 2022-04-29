import express, { Router } from 'express';
import multer from "../libs/storageInformacionTuristica";
import presentacionController from '../controllers/presentacionController';

class PresentacionRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        var cpUpload = multer.fields([
            { name: "imagen_boton_1", maxCount: 1 },
            { name: "imagen_boton_2", maxCount: 1 },
          ]);
        this.router.get('/', presentacionController.list);
        this.router.get('/:id', presentacionController.getOne);
        this.router.post('/',cpUpload, presentacionController.create);
        this.router.put('/:id',cpUpload, presentacionController.update);
        this.router.delete('/:id', presentacionController.delete);
    }

}

export default new PresentacionRoutes().router;

