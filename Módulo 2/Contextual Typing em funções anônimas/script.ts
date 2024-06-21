let nomes = ["Danilo", "Bininha", "Joselu", 90];

nomes.forEach(function (nome) {
    if(typeof nome === 'string') {
        nome.toUpperCase();
    } else {
        nome;
    }
})
