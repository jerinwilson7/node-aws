import dotenv from 'dotenv';
import express, { Application, Request, Response } from "express";

const app:Application = express();

const port = process.env.PORT
dotenv.config()

app.get("/", (req:Request, res:Response) => {
  res.send("HI THIS IS FROM THE SERVER");
});

app.listen(port, () => console.log(`Connected successfully to port : ${port}`));
