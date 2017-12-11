exports.up = knex => {
  return knex.schema.createTableIfNotExists('technology', table => {
    table.increments('id').primary();
    table.string('name').notNullable;
    table.integer('version');
    table.string('description');
    table.string('url');
    table
      .string('cloudinary_id', 45)
      .nullable()
      .defaultTo(null);
  });
};

exports.down = knex => knex.dropTableIfExists('technology');
