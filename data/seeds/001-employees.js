
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employee')
  .truncate()
  .then(function() {
      return knex('employee').insert([
        { name: 'sam' },
        { name: 'max' },
        { name: 'jen' },
        { name: 'jan' },
      ]);
    });
};
