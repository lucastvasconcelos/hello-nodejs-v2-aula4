
exports.up = function(knex, Promise) {
  return knex.schema.alterTable("cachorros",table => {
	table.string("raca_cachorro");
});
};

exports.down = function(knex, Promise) {
  return knex.schema.table("cachorros", table => table.dropColumn("raca_cachorro"));
};
