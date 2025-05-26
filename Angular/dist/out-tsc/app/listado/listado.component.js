import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
let ListadoComponent = class ListadoComponent {
    variable = 0;
    metodo_loco() {
        this.variable++;
    }
};
ListadoComponent = __decorate([
    Component({
        selector: 'app-home',
        imports: [CommonModule],
        templateUrl: './listado.component.html',
        styleUrls: ['./listado.component.css']
    })
], ListadoComponent);
export { ListadoComponent };
