const database = require("./database-connection");


module.exports = {
    list() {
        return database("comments").select("*")
    },
    read(id) {
        return database("comments").where("id", id).first()
    },
    create(comments) {
        return database("comments").insert(comments).returning("*").first()
            .then(record => record)
    },
    update(id, comments) {
        return database("comments").update(comments).where("id", id).returning("*")
            .then(record => record[0])
    },
    delete(id) {
        return database("comments").delete().where("id", id)
    }
};