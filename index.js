// mapeamento
var express = require('express');
var app = express() // declaração variável express 

app.set('view engine', 'ejs'); // setando engine para ejs
app.use(express.static('public')); // criando pasta pública

app.get('/', function(req, res) {
    res.render("../views/index");
}); // mapeando a raiz para index


app.get('/page2', function(req, res) {
    res.render("../views/page2");
}); 

app.get('/offlinePage', function(req, res) {
    res.render("../views/offlinePage");
}); 

app.listen(3000, function() {
    console.log('Executando na porta 3000')
}); // porta que irá rodar