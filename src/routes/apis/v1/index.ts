import { Router } from "express";
import AuthRoute from "./auth.route";
const routes: Router = Router();

routes.use("/v1", AuthRoute);
export default routes;
