const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;
const allRoutes = require('./controllers');

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', allRoutes);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, () => console.log(`App listening on ${PORT}`))
})