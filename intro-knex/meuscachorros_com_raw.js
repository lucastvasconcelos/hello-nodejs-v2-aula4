//meuscachorros.js
const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile);

// queremos um nome e raça para este cachorro
if(!process.argv[3]){
  console.log("usage: node meuscachorros.js <nome> <raça>");
  process.exit(0);
}


let q = "insert into cachorros(nomecachorro,raca_cachorro) values (:nomecachorro,:raca_cachorro)"
let p = {
  nomecachorro:process.argv[2],
  raca_cachorro:process.argv[3]
}


// inserir cachorro
knex.raw(q,p).then(()=>{
	knex.raw("select * from cachorros").then((ret)=>{
	let i = ret.length;
	console.log(ret[i-1]);
	process.exit(0);
});
});


//knex("cachorros").insert({
//},
//['nomecachorro','raca_cachorro'])
//.then((ret) => {
//  console.log(`adicionando cachorro e raça na chave ${ret[0]}`);
//  retorna_nome(ret);
//  process.exit(0);
//}).catch((err)=>{
//  console.log(err);
//  process.exit(1);
//});

