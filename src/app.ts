import express, { Application, Request, Response } from "express";

const app:Application = express();
const port:number = 8080;

app.get("/", (req:Request, res:Response) => {
  res.send("HI THIS IS FROM THE SERVER");
});

app.listen(port, () => console.log("Connected successfully to port 8080"));
