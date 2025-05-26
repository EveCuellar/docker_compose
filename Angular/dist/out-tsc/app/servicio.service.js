import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import axios from 'axios';
let ServicioService = class ServicioService {
    apiURL = 'http://localhost:3000/animales';
    constructor() { }
    async getData() {
        return (await axios.get(this.apiURL)).data;
    }
    ;
    httpPost(body) {
        axios.post(this.apiURL, body);
    }
    ;
    httpDelete(data) {
        axios.delete(this.apiURL, { data });
    }
    ;
    modificar(body) {
        axios.put(this.apiURL, body);
    }
};
ServicioService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ServicioService);
export { ServicioService };
