function addUP(id) {
    let totalid = document.getElementById("total");
    let totalvalue = parseInt(totalid.value, 10);
    totalvalue = isNaN(totalvalue) ? 0 : totalvalue;
    let itemid = document.getElementById(id);
    let itemvalue = parseInt(itemid.value, 10);
    itemvalue = isNaN(itemvalue) ? 0 : itemvalue;
    if (totalvalue < 100) {
        totalvalue++;
        totalid.value = totalvalue;
        itemvalue++;
        itemid.value = itemvalue;

        itemid.innerHTML = itemvalue;
        totalid.innerHTML = totalvalue;
    } else {
        alert("Limite de 100");
    }

}