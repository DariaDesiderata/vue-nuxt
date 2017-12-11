exports.up = knex => {
  return knex.schema.createTableIfNotExists('project', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description').nullable();
    table.string('image_url');
    table
      .string('cloudinary_id', 45)
      .nullable()
      .defaultTo(null);
  });
};

exports.down = knex => knex.dropTableIfExists('project');
