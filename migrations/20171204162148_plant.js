exports.up = knex => {
  return knex.schema.createTableIfNotExists('plant', table => {
    table.increments('plant_id').primary();
    table
      .integer('interest_group')
      .unsigned()
      .notNullable()
      .references('interests_id')
      .inTable('interests');
    table.string('name').notNullable();
    table.text('description').nullable();
    table.string('image_url');
    table
      .string('cloudinary_id', 45)
      .nullable()
      .defaultTo(null);
  });
};

exports.down = knex => knex.schema.dropTableIfExists('plant');
