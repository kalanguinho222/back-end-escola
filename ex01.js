const input = require('readline-sync');

const nome = input.question("qual seu nome? :3");
const idade = Number(input.question("qual sua idade? :3c"));
const cidade = input.question("onde vc mora? ;3");

console.log(`seu nome é ${nome}, vc tem ${idade} anos de idade e mora em ${cidade} >:3`);