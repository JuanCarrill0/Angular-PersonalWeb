import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  scrollToSection(idSection:string) {
    const element = document.getElementById(idSection);
    if(element!=null){
      element.scrollIntoView({behavior: "smooth", block:"center"});
    }
  }

  ngOnInit(): void {
    AOS.init();
  }

}
