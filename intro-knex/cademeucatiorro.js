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
    let conv = ret[i];
    console.log(conv);
    // console.log(Object.values(conv));
    // console.log(Object.keys(conv).map(key => conv[key]));
  }
  process.exit(0);
});
