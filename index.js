const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const database = require("./database-connection")

app.use(bodyParser.json());

app.get("/game", (request, response) => {
    queries.list().then(game => {
        response.json({ game });
    }).catch(console.error);
});

app.get("/game/:id", (request, response) => {
    queries.read(request.params.id).then(game => {
        game
            ? response.json({ game })
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/game", (request, response) => {
    queries.create(request.body).then(game => {
        response.status(201).json({ game });
    }).catch(console.error);
});

app.delete("/game/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/game/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(game => {
        response.json({ game });
    }).catch(console.error);
});

app.use((request, response) => {
    response.sendStatus(404);
});

module.exports = app;