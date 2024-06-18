var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var somar = document.getElementById('somar');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
somar.addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
