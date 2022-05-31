import { Router } from "express";
import ApiRoutes from "./apis";
const routes: Router = Router();

routes.use(ApiRoutes);
export default routes;
