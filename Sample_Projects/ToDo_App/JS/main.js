console.log('main.js called');

function get_todos(){ //called by add() and show()
  var todos = new Array;
  var todos_str = localStorage.getItem('todo');

  if (todos_str !== null){
    todos = JSON.parse(todos_str);
  }
  return todos;
}

function add(){
  // var task = $('task').html;
  var task = document.getElementById('task').value;

  var todos = get_todos();
  todos.push(task)

  localStorage.setItem('todo',JSON.stringify(todos));

  //$('task').html = "";
document.getElementById('task').value = "";
  show();

  return false;
}

// keeps task displayed
function show(){
  var todos = get_todos();

  var myHtml = '<ul>';
  for(var i=0; i<todos.length; i++){
    myHtml+= '<li>' +todos[i] + '<button class="remove" id="' + i+ '" onclick="remove('+i+')">X</button></li>';
  }
  myHtml += '</ul>';
  //finally set todo div to value of myHtml
//$('todos').html = myHtml; 
document.getElementById('todos').innerHTML = myHtml;
}

function remove(itemID){
    // var task = $('task').html;
    //var task = document.getElementById(itemID)

    var todos = get_todos();
    todos.splice(itemID, 1);
  
    localStorage.setItem('todo',JSON.stringify(todos));
  
    show();
  
    return false;
}

document.getElementById('add').addEventListener('click', add);
//this line starts initial display.
show()