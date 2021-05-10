function carregar() {

    var sexo = window.document.getElementsByName(`sexo`)
    var idade = window.document.getElementById(`idade`)
    var texto = window.document.getElementById(`texto`)

    var data = new Date()
    var Data = data.getFullYear()
    var anos = Data - Number(idade.value)

    
    var img = document.createElement(`img`)
    img.setAttribute(`id`,`foto`)

    var genero = sexo[0].checked ? 'Masculino' : 'Feminino'

    if (genero == `Masculino`) {
        texto.innerHTML = `Você é do gênero ${genero}<br>`

        if (anos >= 0 && anos <= 4) {
            texto.innerHTML += `Você tem ${anos} anos<br>`
            img.setAttribute(`src`,`bebeM.jpg`)

        } else if (anos >= 5 && anos <= 12) {
            texto.innerHTML += `Você tem ${anos} anos<br>`
            img.setAttribute(`src`,`criancaM.jpeg`)

        } else if (anos >= 13 && anos <= 17) {
            texto.innerHTML += `Você tem ${anos} anos<br>`
            img.setAttribute(`src`,`jovemM.jpeg`)

        } else if (anos >= 18 && anos <= 30) {
            texto.innerHTML += `Você tem ${anos} anos<br>`
            img.setAttribute(`src`,`adultoM.jpeg`)

        } else if (anos >= 31 && anos <= 50) {
            texto.innerHTML += `Você tem ${anos} anos<br>`
            img.setAttribute(`src`,`adultoIIM.jpeg`)

        } else if (anos >= 51 && anos <= 70) {
            texto.innerHTML += `Você tem ${anos} anos<br>`
            img.setAttribute(`src`,`idosoIII.jpeg`)

        } else if (anos > 70) {
            texto.innerHTML += `Você tem ${anos} anos<br>`
            img.setAttribute(`src`,`idoso4.jpeg`)

        } else {
            texto.innerHTML = `Erro na sua idade`
        }

    } else if (genero == `Feminino`) {
        texto.innerHTML = `Você é do gênero ${genero}<br>`

        if (anos >= 0 && anos <= 4) {
            texto.innerHTML += `Você tem ${anos} anos<br>`
            img.setAttribute(`src`,`bebeF.jpeg`)

        } else if (anos >= 5 && anos <= 12) {
            texto.innerHTML += `Você tem ${anos} anos<br>`
            img.setAttribute(`src`,`criancaF.jpeg`)

        } else if (anos >= 13 && anos <= 17) {
            texto.innerHTML += `Você tem ${anos} anos<br>`
            img.setAttribute(`src`,`jovemF.jpeg`)

        } else if (anos >= 18 && anos <= 30) {
            texto.innerHTML += `Você tem ${anos} anos<br>`
            img.setAttribute(`src`,`adultaF.jpeg`)

        } else if (anos >= 31 && anos <= 50) {
            texto.innerHTML += `Você tem ${anos} anos<br>`
            img.setAttribute(`src`,`adultoIIF.jpeg`)

        } else if (anos >= 51 && anos <= 70) {
            texto.innerHTML += `Você tem ${anos} anos<br>`
            img.setAttribute(`src`,`idosaIII.jpeg`)

        } else if (anos > 70) {
            texto.innerHTML += `Você tem ${anos} anos<br>`
            img.setAttribute(`src`,`adulto4.jpg`)

        } else {
            texto.innerHTML = `Erro na sua idade`
        }

    } else {
        texto.innerHTML = `Marque um gênero`
    }
texto.appendChild(img)
} 