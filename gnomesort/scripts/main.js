let arrTabela = [["Felipe", 30, 3], ["Daniela", 50, 1], ["Marcelo", 40, 2], ["Ana", 25, 4], ["Flávio", 20, 6], ["Júlia", 35, 5]];

function imprime() {
    let tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    let linha;
    let elem;
    for (let i = 0; i < arrTabela.length; i++) {
        linha = tabela.insertRow(i);
        for (let j = 0; j < arrTabela[i].length; j++) {
            elem = linha.insertCell(j);
            elem.innerHTML = arrTabela[i][j];
        }
    }
}

function gnomesort(comparador) {
    let i = 0;
    while (i < arrTabela.length) {
        if (i == 0 || arrTabela[i][comparador] >= arrTabela[i - 1][comparador])
            i++;
        else {
            let temp = arrTabela[i];
            arrTabela[i] = arrTabela[i - 1];
            arrTabela[--i] = temp;
        }
    }
    imprime();
}