import { Schema, model } from 'mongoose';

const PhotoSchema = new Schema({
    url: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    creationDate: {type: Date, default: Date.now}
});

const PhotoModel = model("Photo", PhotoSchema);
export default PhotoModel;
