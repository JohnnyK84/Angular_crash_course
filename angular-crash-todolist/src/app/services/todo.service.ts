import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/models/Todos';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  //some properties to construct url endpoint
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  constructor(private http: HttpClient) { }

  //get todos from server
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl+this.todosLimit);
  }

  //Toggle Completed - make PUT request
  toggleCompleted(todo:Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }

  //delete todo from server
  deleteTodo (todo: Todo):Observable<Todo> {
    //Remove from UI
    const url = `${this.todosUrl}/${todo.id}`
    //Remove from Server
    return this.http.delete<Todo>(url, httpOptions)
  }

  //Add To Do service return observable
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl,todo, httpOptions)
  }

}
