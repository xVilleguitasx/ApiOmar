import { Router } from 'express';
import multer from "../libs/storageImagenesPortada";
import imagenesPortadaController from '../controllers/imagenesPortadaController';

class imagenesPortadaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', imagenesPortadaController.list);
        this.router.get('/:id', imagenesPortadaController.getOne);
        this.router.post('/',multer.single("imagen"), imagenesPortadaController.create);
        this.router.put('/:id',multer.single("imagen"),imagenesPortadaController.update);
        this.router.delete('/:id', imagenesPortadaController.delete);
    }

}

export default new imagenesPortadaRoutes().router;

