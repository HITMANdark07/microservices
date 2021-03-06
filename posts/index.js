const express = require('express');
const { randomBytes } = require('crypto');
const axios = require('axios');

const app = express();

app.use(require('body-parser').json());
app.use(require('cors')());

const posts = {};

app.get("/posts", (req, res) => {
    res.send(posts);
});

app.post("/posts",async(req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    posts[id] = {
        id, title
    };

    await axios.post('http://localhost:4005/events',{
        type:'POST_CREATED',
        data:{
            id, title
        }
    }).catch((err) => {console.log(err.message)});

    res.status(201).send(posts[id]);

});

app.post("/events", (req, res) => {
    console.log("Event Received", req.body.type);
    res.send({});
});

app.listen(4000, () => {
    console.log("POST SERVICE LISTENING ON 4000");
});

