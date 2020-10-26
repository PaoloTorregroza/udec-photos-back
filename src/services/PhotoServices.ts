import Photo from '../schemas/PhotoSchema';
import { Request } from 'express';
import {IApiResponse} from '../utils/ApiResponse';

class PhotoServices {
    public async all(request: Request) {
        const response: IApiResponse = {data: [], status: 404};

        await Photo.find((err, photos) => {
            if (err) {
                console.log(err);
                response.data = [];
                response.status = 500;
                return response;
            }
            response.data = photos;
            response.status = 200;
            return response;
        });

        return response;
    }

    public async save(request: Request) {
        const response: IApiResponse = {data: [], status: 404};

        const newPhoto = new Photo(request.body);
        newPhoto.save(err => {
            if (err) {
                response.status = 500;
                response.data = {saved: false};
                console.log(err);
                return response;
            }
        });

        response.data = {saved: true};
        response.status = 200;

        return response;
    }
}

export default PhotoServices;
