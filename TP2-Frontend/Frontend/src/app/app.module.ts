import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'app/Header/header.component';
import { PartidosComponent } from 'app/Partidos/partidos.component';
import { ListaPartidoComponent } from 'app/Partidos/ListadoPartidos/lista-partido.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PartidosComponent,
    ListaPartidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
