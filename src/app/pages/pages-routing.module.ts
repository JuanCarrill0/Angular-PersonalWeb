import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from '../components/educacion/educacion.component';
import { HabilidadesComponent } from '../components/habilidades/habilidades.component';
import { HeaderComponent } from '../components/header/header.component';
import { SobreMiComponent } from '../components/sobre-mi/sobre-mi.component';
import { TecnologiasComponent } from '../components/tecnologias/tecnologias.component';
import { ProyectosComponent } from '../components/proyectos/proyectos.component';
import { ContactameComponent } from '../components/contactame/contactame.component';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'sobreMi',
    component: SobreMiComponent
  },
  {
    path: 'educacion',
    component: EducacionComponent
  },
  {
    path: 'tecnologias',
    component: TecnologiasComponent
  },
  {
    path: 'habilidades',
    component: HabilidadesComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'contactame',
    component: ContactameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
