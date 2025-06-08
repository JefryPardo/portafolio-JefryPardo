import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'portfolio', redirectTo: 'portfolio/home', pathMatch: 'full' },
  { path: 'portfolio', loadChildren: () => import('./module/portafolio-2025/portafolio.module').then(m => m.PortafolioModule) },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: 'portfolio/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
