import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Partido } from '../partido.model';
import { AppService } from 'app/app.service';
import { Observable } from 'rxjs/Observable';

@Component ({
    selector: 'lista-partidos-component',
    templateUrl: './lista-partido.component.html',
    styleUrls: ['./lista-partido.component.css'],
    providers: [AppService]
})

export class ListaPartidoComponent implements OnInit {
    private partidos = [];
    partidoElegido: Partido;

    constructor(private service: AppService) {

    }

    ngOnInit() {
        this.service.getPartidosActivos().subscribe(data => this.partidos = data)
    }

  /*  partidosActivos() {
        this.service.getPartidosActivos().subscribe(data => this.partidos = data)
    }*/

  /*  onSelect(partido: Partido): void {
        this.partidoElegido = partido;
    }*/
}
