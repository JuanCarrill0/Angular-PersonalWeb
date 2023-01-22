import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {

  visibleBox1 = true;
  visibleBox2 = false;

  showBox(){
    this.visibleBox1 = this.visibleBox1?false:true;
    this.visibleBox2 = this.visibleBox2?false:true;
  }

  constructor(private renderer2:Renderer2) { }



  ngOnInit(): void {
  }


}
