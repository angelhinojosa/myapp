import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { TodoService } from '@todo/services/todo.service';
import { Todo } from '@todo/models/todo.model';
import { MyValidators } from '@utils/validators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  fieldTitle: FormControl;

  constructor(
    private todoService: TodoService
  ) { 
    this.fieldTitle = new FormControl(
      '', // Valor por defecto, puede ser nulo, no hay ningún problema.
      [Validators.minLength(3)], // conjunto de validaciones sincronas (sync).
      [MyValidators.hasTodo(this.todoService)] // validaciones asincronas (async)
      );
  }

  ngOnInit() {
    this.todoService.getAllTodos()
    .subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo() {
    if (this.fieldTitle.valid){
      const newTodo: Todo = {
        title: this.fieldTitle.value,
        id: '2000',
        userId: '1',
        completed: false
      };
      this.todoService.createTodo(newTodo)
      .subscribe(
        todo => {
          this.todos.unshift(todo);
          this.fieldTitle.setValue('');
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  updateTodo() {
    // code
  }

  onDeleteTodo(todoId: string, index: number) {
    this.todoService.deleteTodo(todoId)
    .subscribe(rta => {
      this.todos.splice(index, 1);
    });
  }

  onUpdateTodo(todo: Todo, index: number) {
    this.todoService.updateTodo(todo)
    .subscribe(todoUpdated => {
      this.todos[index] = todoUpdated;
    });
  }

}
