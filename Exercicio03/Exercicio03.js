function carregar() {
    var inicio = window.document.getElementById(`inicio`)
    var fim = window.document.getElementById(`fim`)
    var passo = window.document.getElementById(`passo`)
    var resultado = window.document.getElementById(`msg4`)
		
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    resultado.innerHTML= "Contando :"     
    if (i== 0 || f == 0 || p == 0) {
        alert("Preencha todos os espaços")
    } else {
    		resultado.innerHTML += "<br>"
        for (let c = i; c <= f; c += p) {
            resultado.innerHTML += `${c} \u{1f449}`
        }
        resultado.innerHTML += `\u{1f3C1}`         
    }
}
