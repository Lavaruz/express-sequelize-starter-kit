const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const db = require("./src/models");
const viewRouter = require("./src/routers/viewRouter");
const hiringRouter = require("./src/routers/hiringRouter");
const companyRouter = require("./src/routers/companyRouter");

const VERSION_API = "v1";
app.use("/", viewRouter);
app.use(`/api/hiring`, hiringRouter);
app.use(`/api/companys`, companyRouter);

let PORT = process.env.PORT || 3000;
db.sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () =>
    console.log(
      "server run at port: " + PORT + ". go check: (http://localhost:3000/)"
    )
  );
});
