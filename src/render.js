
const { totalmem } = require("os");
const { rootCertificates } = require("tls");
const fs  = require('fs');
const path = require('path');

let taskNum = '0';
let titleInput = '';
let taskContentInput  ='';
let taskLevel = '';
let deadLineInput = '';

function hideAbt() {    
    var obj  = document.getElementById('aboutDiv');
    obj.className = '';
    obj.className = 'hidden';
}
function showAbt() {
    let obj = document.getElementById('aboutDiv');
    obj.className = '';
    obj.className = 'shown';
}
function hide() {
    this.parentNode.parentNode.remove();
}

function addTask() {
    titleInput = document.getElementById('titleInput').value;
    taskContentInput = document.getElementById('taskContentInput').value;
    taskLevel = document.getElementById('taskLevel').value;
    deadLineInput = document.getElementById('deadLineInput').value;

    var target = document.getElementById('textSpaceDiv');
    var task = document.createElement('div');
    task.classList.add('task');
    task.classList.add(taskLevel);
    task.setAttribute('id',taskNum);

    var xBtnHold = document.createElement('div');
    xBtnHold.classList.add('hideBtn');
    var xBtn = document.createElement('button');
    xBtn.setAttribute('onclick', "this.parentNode.parentNode.remove()");
    xBtn.appendChild(document.createTextNode('(x)'));
    xBtnHold.appendChild(xBtn);
    task.appendChild(xBtnHold);

    var title = document.createElement('p');
    if (titleInput == '') {titleInput = 'Title'};
    title.appendChild(document.createTextNode(titleInput));
    title.className = 'title';
    task.appendChild(title);


    var taskContent = document.createElement('p');
    taskContent.className = 'taskCont';
    taskContentInput = taskContentInput.replace(/\r?\n/g, '\n\n');
    taskContent.appendChild(document.createTextNode(taskContentInput));
    task.appendChild(taskContent);

    task.appendChild(document.createElement('br'));

    var deadLine = document.createElement('p');
    deadLine.className = 'deadL';
    deadLine.appendChild(document.createTextNode('Deadline:'));
    deadLine.appendChild(document.createTextNode(deadLineInput));
    task.appendChild(deadLine);

    task.appendChild(document.createElement('br'));

    fs.appendFile('src/saved.html', document.getElementById('textSpaceDiv').innerHTML, function (err) {
        if (err) throw err;;
        console.log('Saved!');
    });

    target.appendChild(task);
    parseInt(taskNum);
    taskNum++;
    taskNum.toString();


}

function showSettings() {
    document.getElementById('settingsDiv').classList.remove('hidden');
}

function clearTasks() {
    document.getElementById('textSpaceDiv').innerHTML = '';
    fs.appendFile('src/saved.html', document.getElementById('textSpaceDiv').innerHTML, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}   




