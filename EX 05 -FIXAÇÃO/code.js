function comecar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let ecra = document.getElementById('exibir')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Preencha o formulario, Please!')
        ecra.innerHTML = "Impossível contar.!"
    } else {
        ecra.innerHTML = " "
        let ini = Number(inicio.value)
        let final = Number(fim.value)
        let anda = Number(passo.value)
        if (anda <= 0) {
            window.alert('Passo Invalido, Considerando PASSO 1')
        }

        if (ini < final) {
            for (let c = ini; c <= final; c += anda) {
                ecra.innerHTML += `- ${c}`
            }
        } else {
            for (let c = ini; c >= final; c -= anda) {
                ecra.innerHTML += `- ${c}`
            }
        }

    }
}