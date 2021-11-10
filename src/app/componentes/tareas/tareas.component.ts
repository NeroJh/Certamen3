import { Component, OnInit } from '@angular/core';
import { ListaTarea, Tarea } from 'src/app/interfaces/tarea';
import { ListaEstado, Estado } from 'src/app/interfaces/estado';
import {ActivatedRoute,Route} from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})

export class TareasComponent implements OnInit {
  ListaTareas = ListaTarea;
  tarea: any;
  estado:any;

  constructor(private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    let idTarea:number=0;
    this.ruta.params.subscribe(datos=>{
      idTarea=datos['id'];
    })
    this.tarea = ListaTarea.find((element:Tarea) => element.id == idTarea)
    //this.estado=ListaEstado.find(objeto=>objeto.id==this.tarea.idEstado);

    console.log(this.tarea);
    console.log(this.estado);
  }

}
