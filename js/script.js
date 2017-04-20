$( function() {
    $( "#datepicker" ).datepicker();
  } );

var newTask = $("#puttask");
var dDate = $("#datepicker");
var prior = $("#setprior");
var toDoList = JSON.parse(localStorage.getItem('list')) || [];
var tpContent = document.querySelector("template").content;
var holder = $('#holder');
var tr = tpContent.querySelector('tr');
var priority = $("#priority");
var date = $("#ddate");
var listOfTasks = $("#task");

function addTask() {
  console.log('get');
  var newObj = {
    prority: prior.value,
    description: newTask.value,
    ddate: dDate.value,
    isdone: false,
    id: toDoList.length,
  };
  toDoList.push(newObj);
  localStorage.setItem('list', JSON.stringify(toDoList));
  priority.textContent = prior.value;
  listOfTasks.textContent = newTask.value;
  date.textContent = dDate.value;

  tr.setAttribute('data-id', newObj.id);

  holder.appendChild(tpContent.cloneNode(true));
}

$('#add').bind('click', addTask);
