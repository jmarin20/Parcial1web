import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public modal:NgbModal) { }

  imagenRecibida:any;
  nombreRecibido:any;
  descripcionRecibida:any;

  ngOnInit(): void {
  }

  ponerInfo(imagen:any, nombre:any, descripcion:any){
    this.imagenRecibida = imagen;
    this.nombreRecibido = nombre;
    this.descripcionRecibida = descripcion;
  }
}
