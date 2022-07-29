import { Router } from 'express';
import multer from "../libs/storageImagenesPortada";
import mailerController from '../controllers/mailerController';

class mailerRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {

        this.router.post('/mailInscritos', mailerController.MailInscritos);
    }

}

export default new mailerRoutes().router;

