import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
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
    partidoElegido: any;

    constructor(private service: AppService) {

    }

    ngOnInit() {
        //this.service.getPartidosActivos().subscribe(data => this.partidos = data.results)
    }

    partidosActivos() {
        this.service.getPartidosActivos().subscribe(data => this.partidos = data)
    }

    onSelect(partido: any): void {
        this.partidoElegido = partido;
    }
}