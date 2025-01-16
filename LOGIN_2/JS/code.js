function tempo_real() {
    let tempo = document.getElementById('tempo')

    let relogio = new Date();
    let dia_sem = relogio.getDay();
    let dia = relogio.getUTCDate();
    let hora = relogio.getHours();
    let min = relogio.getMinutes();
    let sec = relogio.getSeconds();
    let mes = relogio.getMonth();
    let ano = relogio.getFullYear();


    // variaveis do HTML 
    switch (dia_sem) {
        case 1:
            dia_sem = 'Dom'
            tempo.innerHTML = `${dia_sem} - ${hora}:${min}:${sec} - ${mes} - ${ano}`
            break;
        case 2:
            dia_sem = 'Seg'
            tempo.innerHTML = `${dia_sem} - ${hora}:${min}:${sec} - ${mes} - ${ano}`
            break;
        case 3:
            dia_sem = 'Ter'
            tempo.innerHTML = `${dia_sem} - ${hora}:${min}:${sec} - ${mes} - ${ano}`
            break;
        case 4:
            dia_sem = 'Qua'
            tempo.innerHTML = `${dia_sem} - ${hora}:${min}:${sec} - ${mes} - ${ano}`
            break;
        case 5:
            dia_sem = 'Qui'
            tempo.innerHTML = `${dia_sem} - ${hora}:${min}:${sec} - ${mes} - ${ano}`
            break;
        case 6:
            dia_sem = 'Sex'
            tempo.innerHTML = `${dia_sem} - ${hora}:${min}:${sec} - ${mes} - ${ano}`
            break;
        case 7:
            dia_sem = 'Sáb'
            tempo.innerHTML = `${dia_sem} - ${hora}:${min}:${sec} - ${mes} - ${ano}`
            break;
        default:
            dia_sem = '#dia inválido.!'
            break;
    }
    tempo.innerHTML = `${hora}:${min}:${sec} - ${dia_sem} -${dia} -${mes} - ${ano}`
}