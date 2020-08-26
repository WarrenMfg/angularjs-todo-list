angular.module('todoList').component('todoList', {
  templateUrl: 'todo-list/todo-list.template.html',
  controller: function TodoListController() {
    this.sort = todos => {
      if (todos) {
        return todos.sort((a, b) => {
          if (a.complete) {
            return -1;
          } else {
            return 1;
          }
        });
      }
    };

    this.todo = '';
    this.todos = this.sort(JSON.parse(localStorage.getItem('todos'))) || [];

    this.toggle = todo => {
      const todos = JSON.parse(localStorage.getItem('todos'));
      // persist in localStorage
      const updatedTodos = todos.map(t => {
        if (t.id === todo.id) {
          t.complete = !t.complete;
        }
        return t;
      });
      localStorage.setItem('todos', JSON.stringify(this.sort(updatedTodos)));
      // but also update in memory
      todo.complete = !todo.complete;
    };

    this.addTodo = () => {
      // add to memory
      this.todos.unshift({
        id: Date.now(),
        todo: this.todo,
        complete: false
      });
      // persist in localStorage
      localStorage.setItem('todos', JSON.stringify(this.todos));
      // reset input
      this.todo = '';
    };

    this.delete = id => {
      const currentTodos = JSON.parse(localStorage.getItem('todos'));
      const updatedTodos = currentTodos.filter(t => t.id !== id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      this.todos = this.todos.filter(t => t.id !== id);
    };
  }
});
