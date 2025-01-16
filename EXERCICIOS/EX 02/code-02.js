function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#result')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]verifica os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number.parseInt(fano.value)
        res.innerHTML = `idade calc: ${idade}`
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'fotoDinamica')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'image/foto-bbe-m.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src','image/jovem-prog-2.png')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','image/foto-adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src','image/foto-adulto-p.jpg')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src','image/foto-bbe-p.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src','image/foto-jovem-p.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','image/foto-jovem-m.jpg')
            } else {
                //idoso
                img.setAttribute('src','image/foto-idoso-p.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}