import express, { Express, Request, Response } from "express";
import routes from "./routes";
import dotenv from 'dotenv';

//config env
dotenv.config();

//create express app
const app: Express = express();

//port
const port = process.env['PORT'] || 3000;


//router
app.use(routes);
// app.get(`/`, (req: Request, res: Response) => {
//     return res.json({success: true});
// });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
