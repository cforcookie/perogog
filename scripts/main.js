'use strict'

let counter = 2;
let idCounter = 0;
let teacherIdCounter;

function addNewString() {
    let table = document.getElementById("mainTable");
    let row = table.insertRow(counter);
    row.id = `insertRow${idCounter}`;
    let input = document.createElement("input");
    input.type = "text"

    let newCell = row.insertCell(0);
    newCell.id = `${idCounter}${0}`;
    newCell.innerHTML = counter-1;

    let selectSpace = document.getElementById("string_number_del");
    let option = document.createElement("option");
    option.value = counter-1;
    option.text = counter-1;
    option.id = `delOptionId${counter-1}`;
    selectSpace.add(option);

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

function delString() {
    let table = document.getElementById("mainTable");
    let getIndexRow = document.getElementById("string_number_del");
    let optionValue = getIndexRow.options[getIndexRow.selectedIndex].value;
    console.log(optionValue);
    let row = document.getElementById(`insertRow${optionValue-1}`);
    table.deleteRow(row.rowIndex);
    counter--;
    idCounter--;
}

function addTeacher() {
    const inputTeacher = document.getElementById("inputTeacher");
    if (inputTeacher.value !== "") {
        console.log(inputTeacher.value);

        addOptionTeacher("chooseItem", inputTeacher);
        addOptionTeacher("chooseTeacher", inputTeacher);

        teacherIdCounter++;

    }
}

function addOptionTeacher(idSelect, inputTeacher) {
    let selectSpace = document.getElementById(idSelect);
    let option = document.createElement("option");
    option.value = inputTeacher.value;
    option.text = inputTeacher.value;
    option.id = `teacherId${teacherIdCounter}`;
    selectSpace.add(option);
}

function addGroup() {
    const inputGroup = document.getElementById("inputGroup");
    if (inputGroup.value !== "") {
        console.log(inputGroup.value);

        addOptionGroup("chooseGroup", inputGroup);

        teacherIdCounter++;

    }
}

function addOptionGroup(idSelect, inputGroup) {
    let selectSpace = document.getElementById(idSelect);
    let option = document.createElement("option");
    option.value = inputGroup.value;
    option.text = inputGroup.value;
    option.id = `teacherId${teacherIdCounter}`;
    selectSpace.add(option);
}

function revomeTeacher() {
    const selectTeacherDownRow = document.getElementById("chooseItem");
    const selectTeacherUpRow = document.getElementById("chooseTeacher");
    const toDel = selectTeacherDownRow.selectedIndex
    selectTeacherDownRow.remove(toDel);
    selectTeacherUpRow.remove(toDel);

}

function removeGroup() {
    
}
