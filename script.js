function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
  
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerText = taskText;
  
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
      taskList.removeChild(li);
    };
  
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = '';
  }
  