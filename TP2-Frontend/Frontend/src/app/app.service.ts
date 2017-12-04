import { Component, Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class AppService {
    private apiUrl = "http://localhost:3000/api/";
    data: any = {};

    constructor(private http: Http) {

    }

  getPartidosActivos() {
        let url = this.apiUrl + "partidos/activos";
        return this.http.get(url)
        .map((res: Response) => res.json());
    }
}
