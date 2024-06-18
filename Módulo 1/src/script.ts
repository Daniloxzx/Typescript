let numero1 = document.getElementById('numero1') as HTMLInputElement
let numero2 = document.getElementById('numero2') as HTMLInputElement
let somar = document.getElementById('somar') as HTMLButtonElement
let res = document.getElementById('resultado') as HTMLAreaElement

function calcular(n1: number, n2: number) {
    return n1 + n2
}

somar.addEventListener('click', () => {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString()
})