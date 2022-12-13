import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { ToDo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  listarToDos: ToDo[] = [];

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listarToDos) => { this.listarToDos = listarToDos;})
  }

}
