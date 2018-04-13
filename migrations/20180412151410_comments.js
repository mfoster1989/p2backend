
exports.up = function (knex, Promise) {
    return knex.schema.createTable("comments", function (table) {
        table.increments("id").primary()
        table.string("media")
        table.text("comments")
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists(comments)
};