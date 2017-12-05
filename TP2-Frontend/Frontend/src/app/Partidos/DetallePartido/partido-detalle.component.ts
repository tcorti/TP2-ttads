import { Component, Input, OnInit } from '@angular/core';
import { Partido } from '../partido.model';
import { AppService } from 'app/app.service';

@Component({
    selector: 'partido-detalle',
    templateUrl: './partido-detalle.component.html',
    styleUrls: ['./partido-detalle.component.css'],
    providers: [AppService]
})

export class PartidoDetalleComponent {
	private eventos = [];
	@Input() partidoActivo: Partido;
	private hola: string;

	constructor(private service: AppService){

	}

	ngOnInit(){
		//this.service.getEventosPartido(this.partidoActivo).subscribe(data => this.eventos = data)
	}

}