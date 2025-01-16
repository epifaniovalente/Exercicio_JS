function ver() {
    let numero = document.getElementById('txtn')
    let exibi = document.getElementById('tela')

    if (numero.value.length == 0) {
        window.alert("Insira um numero no formulario.")
    } else {
        let n = Number(numero.value)
        let i = 12
        do {
            let item = document.createElement('option')
            item.text = `${i} x ${n} = ${i * n}`
            exibi.appendChild(item)
            
        } while (i <= 1);

    }
}