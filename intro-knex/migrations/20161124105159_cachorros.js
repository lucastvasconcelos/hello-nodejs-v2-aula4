
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("cachorros",(table) => {
	table.increments("idcachorro");
	table.string("nomecachorro");
});
};

exports.down = function(knex, Promise) {
	knex.schema.dropTableIfExists("cachorro");  
};
