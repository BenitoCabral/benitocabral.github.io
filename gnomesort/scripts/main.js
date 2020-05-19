let arrTabela = [["01","Felipe", 30 ], ["04","Daniela", 50], ["02","Marcelo", 40], ["06","Ana", 25], ["05","Flávio", 20], ["03","Júlia", 35]];

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