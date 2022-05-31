import { Router } from "express";
import ApiV1 from "./v1";
const routes: Router = Router();

routes.use("/api", ApiV1);
export default routes;
