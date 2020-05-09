function addUP(id) {
    let totalid = document.getElementById("total");
    let totalvalue = parseInt(totalid.nodeValue, 10);
    totalvalue = isNaN ? 0 : totalvalue;
    if (totalvalue < 100) {
        let itemid = document.getElementById(id);
        let itemvalue = parseInt(itemid.nodeValue,10);
        itemvalue = isNaN ? 0 : itemvalue;
        totalvalue++;
        itemvalue++;
        itemid.innerHTML = itemvalue;
        totalid.innerHTML = totalvalue;
    }
}