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
  idTarea:number=0;

  iniciadas:Array<Tarea>=new Array();
  enProceso:Array<Tarea>=new Array();
  terminadas:Array<Tarea>=new Array();

  constructor(private ruta:ActivatedRoute) {
    
  }

  ngOnInit(): void {

    for(let i=0; i<ListaTarea.length; i++){
      if(ListaTarea[i].idEstado == 1){
        this.iniciadas.push(ListaTarea[i]);
      }
      if(ListaTarea[i].idEstado == 2){
        this.enProceso.push(ListaTarea[i]);
      }
      if(ListaTarea[i].idEstado == 3){
        this.terminadas.push(ListaTarea[i]);
      }
    }

    /*
    this.ruta.params.subscribe(datos=>{
      idTarea=datos['id'];
    })
    this.tarea = ListaTarea.find((element:Tarea) => element.id == idTarea)
    //this.estado=ListaEstado.find(objeto=>objeto.id==this.tarea.idEstado);

    */
  }

}
