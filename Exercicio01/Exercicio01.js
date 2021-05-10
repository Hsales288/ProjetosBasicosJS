function carregar() {
    var msg = window.document.getElementById(`msg`)
    var msg2 = window.document.getElementById(`msg2`)
    var img = window.document.querySelector(`img`)
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`

    if (hora >= 0 && hora < 12) {
        msg2.innerHTML = `Bom Dia !`
        img.src = `manha.jpg`
    } else if (hora >= 12 && hora <= 18) {
        msg2.innerHTML = `Boa Tarde !`
        img.src = `tarde.jpg`
    } else {
        msg2.innerHTML = `Boa Noite !`
        img.src = `noite.jpg`
    }
}
