function gerar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert("Impossível, Digite um número.")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = " "
        while (c <= 12) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}