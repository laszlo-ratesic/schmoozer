const express = require("express");
const mongoose = require("mongoose");
const gradient = require("gradient-string");
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create();
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/js')));

// turn on routes
app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/schmoozer",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// logs mongoose queries
mongoose.set("debug", true);

app.listen(PORT, () =>
  console.log(gradient.atlas(`🌍 Connected on http://localhost:${PORT}`))
);
