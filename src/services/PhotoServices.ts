import Photo from "../schemas/PhotoSchema";
import { Request } from "express";
import { IApiResponse } from "../utils/ApiResponse";

class PhotoServices {
  public async all(request: Request) {
    const response: IApiResponse = { data: [], status: 404 };

    await Photo.find((err, photos) => {
      if (err) {
        console.log(err);
        response.data = { photos: [] };
        response.status = 500;
        return response;
      }
      response.data = photos;
      response.status = 200;
      return response;
    });

    return response;
  }

  public async one(request: Request) {
    const response: IApiResponse = { data: [], status: 404 };

    await Photo.findOne({ id: request.params.id }, (err, res) => {
      if (err) {
        console.log(err);
        response.data = { photo: null };
        response.status = 500;
        return response;
      }

      response.data = { photo: res };
      response.status = 200;
      return response;
    });

    return response;
  }

  public async save(request: Request) {
    const response: IApiResponse = { data: [], status: 404 };

    const newPhoto = new Photo(request.body);
    newPhoto.save((err) => {
      if (err) {
        response.status = 500;
        response.data = { saved: false };
        console.log(err);
        return response;
      }
    });

    response.data = { saved: true };
    response.status = 200;

    return response;
  }

  public async delete(request: Request) {
    const response: IApiResponse = { data: [], status: 404 };

    await Photo.remove({ id: request.params.id }, (err) => {
      if (err) {
        response.status = 500;
        response.data = { deleted: false };
        console.log(err);
        return response;
      }
    });

    response.data = { deleted: true };
    response.status = 200;

    return response;
  }

  public async update(request: Request) {
    const response: IApiResponse = { data: [], status: 404 };

    const photo = new Photo(request.body);
    photo.save((err) => {
      if (err) {
        response.status = 500;
        response.data = { updated: false };
        console.log(err);
        return response;
      }
    });

    response.data = { updated: true };
    response.status = 200;
    return response;
  }
}

export default PhotoServices;
