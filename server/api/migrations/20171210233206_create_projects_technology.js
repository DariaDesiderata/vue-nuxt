exports.up = knex => {
  return knex.schema.createTableIfNotExists('project_technology', table => {
    table.increments('id').primary();
    table
      .integer('project_id')
      .references('id')
      .inTable('project');
    table
      .integer('tech_id')
      .references('id')
      .inTable('technology');
  });
};

exports.down = knex => knex.dropTableIfExists('project_technology');
