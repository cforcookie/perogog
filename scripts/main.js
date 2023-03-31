'use strict'

let counter = 2;
let idCounter = 0;
let stringCounter = 0;
let teacherIdCounter = 0;
let groupIdCounter = 0;
let resultForAll = 0;

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
    let optionNum = document.createElement("option");
    optionNum.value = counter-1;
    optionNum.text = counter-1;
    optionNum.id = `delOptionId${counter-1}`;
    selectSpace.add(optionNum);

    let newCell1 = row.insertCell(1) 
    newCell1.id = `${idCounter}${1}`
    newCell1.innerHTML =`<input id="input${idCounter}${1}" type="text">`;

    let newCell2 = row.insertCell(2);
    newCell2.id = `${idCounter}${2}`;
    newCell2.innerHTML = `<select name="group" id="group${idCounter}" style="border-width: 0px;appearance: none;width: 100px;"></select>`;
    updateGroupAddToNewString(idCounter);

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
    stringCounter++;
}

function delString() {
    let table = document.getElementById("mainTable");
    let getIndexRow = document.getElementById("string_number_del");
    let optionValue = getIndexRow.options[getIndexRow.selectedIndex].value;
    let row = document.getElementById(`insertRow${optionValue - 1}`);
    table.deleteRow(row.rowIndex);
    getIndexRow.remove(getIndexRow.selectedIndex);

    for(let i = 0; i < getIndexRow.options.length; i++) {
        getIndexRow.options[i].value = i + 1;
        getIndexRow.options[i].textContent = i + 1;
    }

    let copyIdCounter = idCounter - 1;
    for(let i = 0; i < copyIdCounter; i++) {
        let row = document.getElementById(`insertRow${i}`);
        if(row == null) {
            for(let j = i; j < copyIdCounter; j++) {
                let newId = j + 1;
                const rowNext = document.getElementById(`insertRow${newId}`);
                rowNext.id = `insertRow${j}`;
            }
        }
    }

    for(let i = 0; i < copyIdCounter; i++) {
        for(let j = 0; j < 18; j++) {
            let cellToChangeId = document.getElementById(`${i}${j}`);
            if( cellToChangeId == null) {
                let nextId = i + 1;
                const cellNext = document.getElementById(`${nextId}${j}`);
                cellNext.id = `${i}${j}`;
            }
        }
    }

    for(let i = 0; i < copyIdCounter; i++) {
        let cell = document.getElementById(`${i}0`)
        cell.textContent = i+1;
    }

    idCounter--
    counter--;
}

function addTeacher() {
    const inputTeacher = document.getElementById("inputTeacher");
    if (inputTeacher.value !== "") {
        addOptionTeacher("chooseItem", inputTeacher);
        addOptionTeacher("chooseTeacher", inputTeacher);
        teacherIdCounter++;
        inputTeacher.value = "";
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
        addOptionGroup("chooseGroup", inputGroup);
        groupIdCounter++;
        inputGroup.value = "";
        updateGroupRemove();
        updateGroupAdd();
    }
    
}

function addOptionGroup(idSelect, inputGroup) {
    let selectSpace = document.getElementById(idSelect);
    let option = document.createElement("option");
    option.value = inputGroup.value;
    option.text = inputGroup.value;
    option.id = `groupId${groupIdCounter}`;
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
    const selectGroup = document.getElementById("chooseGroup");
    const toDel = selectGroup.selectedIndex
    selectGroup.remove(toDel);
    groupIdCounter--;
    updateGroupRemove();
    updateGroupAdd();
}

function updateGroupRemove() {
    for(let i = 0; i < idCounter; i++) {
        let localOptionCounter = document.getElementById(`group${i}`);
        let length = localOptionCounter.options.length;
        for (let j = length-1; j >= 0; j--) {
            localOptionCounter.options[j] = null;
        }
    }
}

function updateGroupAdd () {
    for(let i = 0; i < idCounter; i++) {
        let localOptionCounter = document.getElementById(`group${i}`);
        for(let j = 0; j < groupIdCounter; j++) {
            let groupCell = document.getElementById(`groupId${j}`);
            let option = document.createElement("option");
            option.value = groupCell.value;
            option.textContent = groupCell.textContent;
            option.id = `rowGroupId${j}`;
            option.style = "text-align: center;"
            localOptionCounter.append(option);
        }
    }
}

function updateGroupAddToNewString (idCounter) {
    let localOptionCounter = document.getElementById(`group${idCounter}`);
    for(let j = 0; j < groupIdCounter; j++) {
        let groupCell = document.getElementById(`groupId${j}`);
        let option = document.createElement("option");
        option.value = groupCell.value;
        option.textContent = groupCell.textContent;
        option.id = `rowGroupId${j}`;
        option.style = "text-align: center;"
        localOptionCounter.append(option);
    }
}

function calculateTable() {
    culculateMain();
    culculateB();
    culculateVB();
    culculateAll();
    culculateCelebrateAll();
    culculateResultAll();
}

function culculateMain() {
    for(let i = 0; i < idCounter; i++) {
        let result = 0;
        for(let j = 3; j < 17; j++) {
            let cellValue = parseInt(document.getElementById(`input${i}${j}`).value);
            if(!isNaN(cellValue)) {
                result+=cellValue;
            }
        }
        let cellForResult = document.getElementById(`${i}17`);
        resultForAll+=result;
        cellForResult.innerText = result;
    }
}

function culculateB() {
    for(let i = 0; i < idCounter; i++) {
        let result = 0;
        let cellValue = parseInt(document.getElementById(`input${i}15`).value);
        if(!isNaN(cellValue)) {
            result+=cellValue;
        }
        let cellForResult = document.getElementById(`altogetherB`);
        cellForResult.innerText = result;
    }
}

function culculateVB() {
    for(let i = 0; i < idCounter; i++) {
        let result = 0;
        let cellValue = parseInt(document.getElementById(`input${i}16`).value);
        if(!isNaN(cellValue)) {
            result+=cellValue;
        }
        let cellForResult = document.getElementById(`altogetherVB`);
        cellForResult.innerText = result;
    }
}

function culculateAll() {
    let result = 0;
    let cellValueB = parseInt(document.getElementById(`altogetherB`).textContent);
    let cellValueVB = parseInt(document.getElementById(`altogetherVB`).textContent);
    if(!isNaN(cellValueB)) {
        result+=cellValueB;
    }
    if(!isNaN(cellValueVB)) {
        result+=cellValueVB;
    }
    let cellForResult = document.getElementById(`altogetherAll`);
    cellForResult.innerText = result;
}

function culculateCelebrateAll() {
    let result = 0;
    let cellValueB = parseInt(document.getElementById(`celebrateB`).value);
    let cellValueVB = parseInt(document.getElementById(`celebrateVB`).value);
    if(!isNaN(cellValueB)) {
        result+=cellValueB;
    }
    if(!isNaN(cellValueVB)) {
        result+=cellValueVB;
    }
    let cellForResult = document.getElementById(`celebrateAll`);
    cellForResult.innerText = result;
}

function culculateResultAll() {
    let altogetherB = parseInt(document.getElementById("altogetherB").textContent);
    let altogetherVB = parseInt(document.getElementById("altogetherVB").textContent);
    let altogetherAll = parseInt(document.getElementById("altogetherAll").textContent);
    let celebrateB = parseInt(document.getElementById("celebrateB").value);
    let celebrateVB = parseInt(document.getElementById("celebrateVB").value);
    let celebrateAll = parseInt(document.getElementById("celebrateAll").textContent); 
    let resultB = document.getElementById("resultB");
    let resultVB = document.getElementById("resultVB");
    let resultAll = document.getElementById("resultAll");
    let numberResultB = 0;
    let numberResultVB = 0;
    let numberResultAll = 0;
    numberResultB = altogetherB - celebrateB;
    resultB.innerText = numberResultB;
    numberResultVB = altogetherVB - celebrateVB;
    resultVB.innerText = numberResultVB;
    numberResultAll = resultForAll - celebrateAll;
    resultAll.innerText = numberResultAll;
}