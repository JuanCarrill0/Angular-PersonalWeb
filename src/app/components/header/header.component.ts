import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  componenteActivo:number = 0;


  showComponents(indice:number) {
    this.componenteActivo = indice;
  }


  constructor() { }

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }

}
