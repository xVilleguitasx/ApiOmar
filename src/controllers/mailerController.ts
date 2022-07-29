import { Request, Response } from 'express';
var nodeoutlook = require('nodejs-nodemailer-outlook');
const nodemailer = require("nodemailer");
class MailerController {


    public async MailInscritos(req: Request, res: Response): Promise<void> {
        const{mensaje,destinatario,asunto} = req.body;
    
      try {
         
        nodeoutlook.sendEmail({
            auth: {
                user: "csei@uta.edu.ec",
                pass: "Congreso?2021"
            },
            from: 'csei@uta.edu.ec',
            to: `${destinatario}`,
            subject: `${asunto}`,
            html: `${mensaje}`
        });
      res.json({ message:'ok'})  
      } catch (error) {
        console.log(error);
        res.json({ message:'error'})  
      }
    }

  
}

const mailerController = new MailerController;
export default mailerController;