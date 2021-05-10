function calcular() {

    var number = document.getElementById(`numero`)
    var s = document.getElementById(`tab`)

    var n = Number(number.value)

    if (number.value.length == 0) {
        window.alert(`Por favor, digite um número!`)
    } else {
        for (var c = 0; c <= 10; c++) {
            let item = document.createElement(`option`)
            item.text = `${n} x ${c} = ${n*c}`
            s.appendChild(item)
        }
    }

}