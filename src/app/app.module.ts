import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { UpdateTareaComponent } from './componentes/update-tarea/update-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TareasComponent,
    CabeceraComponent,
    UpdateTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
