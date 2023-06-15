const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const db = require("./src/models");
const viewRouter = require("./src/routers/viewRouter");
const indexRouter = require("./src/routers/indexRouter");

const VERSION_API = "v1";
app.use("/", viewRouter);
app.use(`/api/${VERSION_API}`, indexRouter);

let PORT = process.env.PORT || 3000;
db.sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () =>
    console.log(
      "server run at port: " + PORT + ". go check: (http://localhost:3000/)"
    )
  );
});
