/* Se houvessem outras funções que usassem os mesmos elementos declarados na função `carregar`, eles poderiam ser declarados aqui:
 * const msg = document.getElementById(`msg`)
 * const msg2 = document.querySelector(`#msg2`)
 * const img = document.querySelector(`img`)
*/

function carregar() {
    const msg = document.getElementById(`msg`)
    const msg2 = document.querySelector(`#msg2`)
    const img = document.querySelector(`img`)
    const data = new Date()
    const hora = data.getHours()
    const minutos = data.getMinutes()
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
