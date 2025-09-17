const path = require(`path`);

//apenas o nome do arquivo atual
console.log(path.basename(__filename));
// Nome do Direterio Atual
console.log(path.dirname(__filename));

//extensão do arqivo 
console.log(path.extname(__filename));

// Criar um objeto path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test",'teste.html'));