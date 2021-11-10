import { Component, OnInit } from '@angular/core';
import { ListaTarea, Tarea } from 'src/app/interfaces/tarea';

@Component({
  selector: 'app-update-tarea',
  templateUrl: './update-tarea.component.html',
  styleUrls: ['./update-tarea.component.scss']
})
export class UpdateTareaComponent implements OnInit {
  ListaTarea:Tarea[]=ListaTarea;

  constructor() { }

  ngOnInit(): void {
  }

}
