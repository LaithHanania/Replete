const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send({hi: 'there'});
});

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

