require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongooseConnection = require("./src/database/database");
const globalRouter = require("./src/router/globalRouter");
const globalError = require("./src/error/globalError");

const app = express();
const port = process.env.PORT || 9000;

// parser


app.use(cors({
  origin: ['https://job-task-front-end.vercel.app/', 'https://task-front-end.vercel.app/'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
}));



app.use(express.json());

// mongoose connection
mongooseConnection(process.env.MONGOOSE_CONNECTION);

app.get("/", (_, res) => {
  res.send({
    projectName: "Neutron Ltd job task",
    author: "Md Rubel",
  });
});

app.use("/api/v1", globalRouter);

app.use(globalError)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
