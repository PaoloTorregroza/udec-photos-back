import { Router } from 'express';
import photo from './photo';

const routes = Router();

routes.use("/photo", photo);

export default routes;
