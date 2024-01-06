import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisosLegalesComponent } from './components/avisos-legales/avisos-legales.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'avisos-legales', component: AvisosLegalesComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
