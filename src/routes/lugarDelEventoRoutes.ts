import { Router } from 'express';
import multer from "../libs/storageImagenesPortada";
import lugarDelEventoController from '../controllers/lugarDelEventoController';

class lugarDelEventoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', lugarDelEventoController.list);
        this.router.get('/:id', lugarDelEventoController.getOne);
        this.router.post('/',multer.single("imagen"), lugarDelEventoController.create);
        this.router.put('/:id',multer.single("imagen"),lugarDelEventoController.update);
        this.router.delete('/:id', lugarDelEventoController.delete);
    }

}

export default new lugarDelEventoRoutes().router;

