require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongooseConnection = require("./src/database/database");
const globalRouter = require("./src/router/globalRouter");
const globalError = require("./src/error/globalError");

const app = express();
const port = process.env.PORT || 9000;

// parser
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
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
