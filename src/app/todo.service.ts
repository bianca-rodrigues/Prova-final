import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from './components/todo/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly API = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  listar(): Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this.API);
  }

}
