const express = require('express');
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 8080;
const allRoutes = require('./controllers');

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}))

app.use('/', allRoutes);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, () => console.log(`App listening on ${PORT}`))
})