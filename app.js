const express = require("express");
const cors = require("CORS")
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const database = require("./database-connection")

app.use(bodyParser.json());
app.use(cors());

app.get("/comments", (request, response) => {
    queries.list().then(comments => {
        response.json({ comments });
    }).catch(console.error);
});

app.get("/comments/:id", (request, response) => {
    queries.read(request.params.id).then(comments => {
        comments
            ? response.json({ comments })
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/comments", (request, response) => {
    queries.create(request.body).then(comments => {
        response.status(201).json({ comments });
    }).catch(console.error);
});

app.delete("/comments/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/comments/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(comments => {
        response.json({ comments });
    }).catch(console.error);
});

app.use((request, response) => {
    response.sendStatus(404);
});

module.exports = app;