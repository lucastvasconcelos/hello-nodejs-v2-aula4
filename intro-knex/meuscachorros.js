//meuscachorros.js
const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile);

// queremos um nome e raça para este cachorro
if(!process.argv[3]){
  console.log("usage: node meuscachorros.js <nome> <raça>");
  process.exit(0);
}

// inserir cachorro
knex("cachorros").insert({
  nomecachorro:process.argv[2],
  raca_cachorro:process.argv[3]
},
['nomecachorro','raca_cachorro'])
.then((ret) => {
  console.log(`adicionando cachorro e raça na chave ${ret[0]}`);
  process.exit(0);
}).catch((err)=>{
  console.log(err);
  process.exit(1);
});
