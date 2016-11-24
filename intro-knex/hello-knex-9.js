// hello-knex-9.js
const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile); // olha a macumba..

// queremos um nome para este cachorro
if(!process.argv[2]){
  console.log("usage: node hello-knex-9.js <nome>");
  process.exit(0);
}

// inserir cachorro
knex("cachorros").insert({
  nomecachorro:process.argv[2]
},"idcachorro").then((ret) => {
  console.log(`cachorro ${ret[0]} inserido com a chave ${ret[0]}`);
  process.exit(0);
}).catch((err)=>{
  console.log(err);
  process.exit(1);
});
