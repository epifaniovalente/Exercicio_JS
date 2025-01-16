function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let result = document.getElementById("resultado")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO!] Falta Dados.')
        result.innerHTML = "Impossivel Contar"
    } else {
        result.innerHTML = "Contando... <br>" 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem Crescente...
            for (let c = i; c <= f; c += p) {
                result.innerHTML += `${c} \u{1F509}`
            }

        } else {
            //Contagem Regressiva...
            for (let c = i; c >= f; c -= p) {
                result.innerHTML += `${c} \u{1F509}`
            }
        }
        result.innerHTML += `\u{1F3C1} `
    }
}