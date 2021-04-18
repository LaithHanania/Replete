const express = require('express');
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');
const keys = require("./config/keys");
require("./models/User");
require("./models/Criteria");
require("./models/Event");
require("./models/CustomEvent");
require("./services/passport");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true});

const app = express();
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);
require("./routes/criteriaRoutes")(app);
require("./routes/eventRoutes")(app);
require("./routes/customEventRoutes")(app);

//For production routing (heroku):
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT|| 5000; //heroku production port vs local (5000) port
app.listen(PORT);

