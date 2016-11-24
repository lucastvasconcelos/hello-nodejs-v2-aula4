// hello-knex-8.js
"use strict"
const knex = require("./db");

if(!process.argv[3]){
  console.log("usage: node hello-knex-8.js <id> <nome>");
  process.exit(0);
}


let q = "insert into convidado (idconvidado,nomeconvidado) values (:id,:nome)";
let p = {
  nome: process.argv[3],
  id: process.argv[2]
};

knex.raw(q,p).then(() => {
  knex.raw("select * from convidado").then((ret) => {
    let i = ret.length;
    console.log(ret[i-1]);
    process.exit(0);
  });
});
