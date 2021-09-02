const express = require("express");
const cors = require("cors");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 8080;
const allRoutes = require("./controllers");

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(
  session({
    secret: "password",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 2 * 60 * 60 * 1000,
    },
  })
);

app.use("/", allRoutes);

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, () => console.log(`App listening on ${PORT}`));
});
