//meuscachorros.js
const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile);


// queremos um nome para buscar este cachorro
if(!process.argv[2]){
  console.log("usage: node meuscachorros.js <nome>");
  process.exit(0);
}

knex("cachorros").select().where({
  nomecachorro:process.argv[2]
}).then(function(ret){
  console.log("id\t\tnome")
  let i = ret.length;
  while(i--){
    let dog = ret[i];
    console.log(dog);
  }
  process.exit(0);
});
