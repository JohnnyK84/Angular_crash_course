import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todos';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  //constructor to inject service imported above and created with console cmd: ng g s services/Todo 
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  deleteTodo(todo:Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    //first make push request to server via the service
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo)
    })
  }
}
