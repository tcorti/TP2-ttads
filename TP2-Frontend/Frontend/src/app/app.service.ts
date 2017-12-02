import { Component, Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class AppService {
    private firstPathUrl = "http://localhost:3000/api/";
    data: any;

    constructor(private http: Http) {

    }

    getData(url) {
        return this.http.get(url)
        .map((res: Response) => res.json());
    }

    getPartidosActivos() {
        let url = this.firstPathUrl +"partidos/activos";
        return this.getData(url);
    }
}