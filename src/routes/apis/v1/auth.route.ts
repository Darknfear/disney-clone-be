import { Router, Request, Response } from 'express';
const routes: Router = Router();

routes.get('/auth', (req: Request, res: Response) => {
    return res.json({
        success: true
    });
})
export default routes;