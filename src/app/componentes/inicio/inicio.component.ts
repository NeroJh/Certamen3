import { Component, OnInit } from '@angular/core';
import { Tarea, ListaTarea } from 'src/app/interfaces/tarea';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  
  mostrarFormulario:boolean = false;
  form:FormGroup;
  formulario:boolean = false;

  constructor(private formbuilder:FormBuilder) {
      this.form = this.formbuilder.group({
      nombre:['',[Validators.required]],
      estado:['',[Validators.required]],
      }) 
}

  ngOnInit(): void {
  }

  enviarDatos(){
    this.mostrarFormulario = true;
    console.log(this.form.value);
    let nombre:any = document.getElementById("nombre");
    let seleccion:any = document.getElementById("");

    let nuevaTarea:Tarea = {
      id : ListaTarea.length,
      titulo : nombre.value,
      idEstado : seleccion.value
    }

    ListaTarea.push(nuevaTarea)
  }
}
