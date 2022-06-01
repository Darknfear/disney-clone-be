import * as express from "express";
import routes from "./routes";
import * as dotenv from 'dotenv';
//const { response, application } = express;

//config env
dotenv.config();

//create express app
const app: express.Application = express();

//port
const port = process.env['PORT'] || 3000;


//router
app.use(routes);
// app.get(`/`, (req: Request, res: Response) => {
//     return res.json({success: true});
// });

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
