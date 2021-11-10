import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {TareasComponent} from './componentes/tareas/tareas.component';
import {UpdateTareaComponent} from './componentes/update-tarea/update-tarea.component'

const routes: Routes = [
  {path: "",component:InicioComponent},
  {path:"tareas",component:TareasComponent},
  {path:"actualizarTarea", component:UpdateTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }