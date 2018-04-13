
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, media: 'Star Trek Beyond', comments: "tried to hard"},
        { id: 2, media: 'Star Trek Nemesis', comments: "horrible way to end a franchise" }
      ]);
    })
    .then(function() {
        return knex.raw("ALTER SEQUENCE comments_id_seq RESTART WITH 2")
    })
};
