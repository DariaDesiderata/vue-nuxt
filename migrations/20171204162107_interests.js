exports.up = knex => {
  return knex.schema.createTableIfNotExists('interests', table => {
    table.increments('interests_id').primary();
    table.string('name').notNullable();
    table.text('description').nullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('interests');
};
