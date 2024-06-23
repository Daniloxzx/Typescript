

function mostrarTexto(texto: string, alinhamento: 'right' | 'left' | 'center') {
    return `<div style="text-align: ${alinhamento}">${texto}</div>`
}

mostrarTexto('Danilo Fernandes', 'right')
mostrarTexto('Joselu', 'left')
mostrarTexto('Bininha', 'center')
mostrarTexto('Bolsonaro', 'uso indevido')