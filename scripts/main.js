'use strict'

let counter = 3;
let idCounter = 0;
function addNewString() {
    let table = document.getElementById("mainTable");
    let row = table.insertRow(counter);
    let input = document.createElement("input");
    input.type = "text"

    let newCell = row.insertCell(0);
    newCell.id = `${idCounter}${0}`;
    newCell.innerHTML = counter-1;

    let newCell1 = row.insertCell(1) 
    newCell1.id = `${idCounter}${1}`
    newCell1.innerHTML =`<input id="input${idCounter}${1}" type="text">`;

    let newCell2 = row.insertCell(2);
    newCell2.id = `${idCounter}${2}`;
    newCell2.innerHTML = `<select name="group" class="group"></select>`;

    for(let i = 3; i < 17; i++) {
        const newCell = row.insertCell(i) 
        newCell.id = `${idCounter}${i}`
        newCell.innerHTML =`<input id="input${idCounter}${i}" type="text">`;
    }

    document.getElementById(`input${idCounter}${1}`).style = "width:150px";

    newCell = row.insertCell(17);
    newCell.id = `${idCounter}${17}`;
    newCell.innerHTML;



    counter++;
    idCounter++;
}
