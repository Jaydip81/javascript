class Task {
  constructor(Work, time) {
      this.Work = Work;
      this.time = time;
      this.completed = false;
  }
}

class UI {
  static addTaskToList(task) {
      const list = document.getElementById('taskList');

      const taskItem = document.createElement('li');
      taskItem.classList.add('todo-item');
      if (task.completed) {
          taskItem.classList.add('complete');
      }
      taskItem.innerHTML = `
          <span>${task.Work}</span>
          <span>${task.time}</span>
          <input type="checkbox" class="complete-checkbox" ${task.completed ? 'checked' : ''}>
      `;
      list.appendChild(taskItem);
  }


  static toggleTask(element) {
      if (element.classList.contains('complete-checkbox')) {
          const taskItem = element.parentElement;
          taskItem.classList.toggle('complete');

          const tasks = Store.getTasks();
          const taskWork = taskItem.querySelector('span:first-child').textContent.trim();
          tasks.forEach(task => {
              if (task.Work === taskWork) {
                  task.completed = !task.completed;
              }
          });
          Store.setTasks(tasks);
      }
  }

  static showAlert(message, classWork) {
      const div = document.createElement('div');
      div.classWork = alert `${classWork}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.todo-container');
      const form = document.querySelector('.todo-form');
      container.insertBefore(div, form);

  
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

}
document.addEventListener('DOMContentLoaded', UI.displayTasks);

document.getElementById('todoForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const taskWork = document.getElementById('taskInput').value.trim();
  const taskTime = document.getElementById('taskTime').value.trim();

  if (taskWork === '' || taskTime === '') { 
      UI.showAlert('Please enter both task and time', 'error');
  } else {
      const newTask = new Task(taskWork, taskTime);
      UI.addTaskToList(newTask);

      const tasks = Store.getTasks();
      tasks.push(newTask);
      Store.setTasks(tasks);

      UI.showAlert('Task added', 'success');
      UI.clearFields();
  }
});
document.getElementById('taskList').addEventListener('change', (e) => {
  UI.toggleTask(e.target);
});