import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  proyectos = [true, false, false, false, false]
  contador:number = 0;

  showProjectsBack(){
    if(this.contador!=0){
      this.proyectos[this.contador]=false;
      this.contador--;
      this.proyectos[this.contador]=true;
    }else{
      this.proyectos[this.contador]=false;
      this.contador=this.proyectos.length-1;
      this.proyectos[this.contador]=true;
    }
  }

  showProjectsFront(){
    if(this.contador!=this.proyectos.length-1){
      this.proyectos[this.contador]=false;
      this.contador++;
      this.proyectos[this.contador]=true;
    }else{
      this.proyectos[this.proyectos.length-1]=false;
      this.contador=0;
      this.proyectos[this.contador]=true;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
