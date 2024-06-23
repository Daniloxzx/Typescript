function fazerRequisicao(url: string, method: 'GET' | 'POST') {
    //...
}

type requestDetails = {
    url: string,
    method: 'GET' | 'POST'
}

let req: requestDetails = {
    url: 'https://google.com.br',
    method: 'GET'
}

fazerRequisicao(req.url, req.method)


// type Method = 'GET' | 'POST'
// let url = 'https://google.com.br'
// let method: Method = 'POST'