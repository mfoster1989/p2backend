
exports.up = function (knex, Promise) {
    return knex.schema.createTable("comments", function (table) {
        table.increments("id").primary()
        table.text("media")
        table.text("review")
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists(comments)
};