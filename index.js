const express = require('express'); //common js modules
//import express from 'express'; //es2015 modules

const app = express();

console.log("starting app");

//simple handler.
app.get(
    '/',
    (req, res) => {
        res.send(
            {hi:'there'}
        );

        console.log("inside res/rep");
    }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
