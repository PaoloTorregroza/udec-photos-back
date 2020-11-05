import Photo from "../schemas/PhotoSchema";
import { Request } from "express";
import { IApiResponse } from "../utils/ApiResponse";

class PhotoServices {
  public async all(request: Request): Promise<IApiResponse> {
    const response: IApiResponse = { data: [], status: 404 };

    try {
      const photos = await Photo.find();

      response.data = photos;
      response.status = 200;
    } catch (e) {
      console.log(e);
      response.data = e;
      response.status = 500;
    }

    return response;
  }

  public async one(request: Request) {
    const response: IApiResponse = { data: [], status: 404 };

    await Photo.findOne({ _id: request.params.id }, (err, res) => {
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

    await Photo.remove({ _id: request.params.id }, (err) => {
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

    Photo.findByIdAndUpdate(request.params.id, request.body, (err: Error) => {
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
