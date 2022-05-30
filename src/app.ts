import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

//config env
dotenv.config();

//create express app
const app: Express = express();

//port
const port = process.env['PORT'] || 3000;

app.get(`/`, (req: Request, res: Response) => {
    return res.json({success: true});
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
