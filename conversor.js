function converter() {
    let decimal = document.getElementById("consversor").value
    let tela = document.getElementById("res")
    const tabelaHexa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const res = []

    while (decimal !== 0) {
        let resto = 0
        resto = decimal % 16
        decimal = Math.floor(decimal / 16);
        res.push(tabelaHexa[resto])
    }
    res.reverse()
    tela.innerHTML = res.join("")
}

