const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send({hi: 'there'});
});

const PORT = process.env.port|| 5000; //heroku production port vs local (5000) port
app.listen(PORT);