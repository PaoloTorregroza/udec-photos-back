import { Request, Response } from 'express';
import PhotoServices from '../services/PhotoServices';

class PhotoController {
    private services = new PhotoServices();

    public async all(request: Request, response: Response) {
        const responseData = await this.services.all(request);
        response.status(responseData.status).send(responseData.data);
    }

    public async save(request: Request, response: Response) {
        const responseData = await this.services.save(request);
        response.status(responseData.status).send(responseData.data);
    }
}

export default PhotoController;
