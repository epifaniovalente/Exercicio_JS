function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours();
    //hora = 7
    var min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${min} minutos.`

    if (hora >= 0 && hora <12) {
        /* Bom Dia */
        img.src = 'image/img-manha-pq.jpg'
        document.body.style.background = 'yellowgreen'
    } else if(hora >= 12 && hora < 18){
        /* Boa Tarde */
        img.src = 'image/img-tarde-pq.jpg'
        document.body.style.background = '#b9846f'
    }else{
        /* Boa Noite */
        img.src = 'image/img-noite-pq.jpg'
        window.document.body.style.background = '#515154'
    }
}