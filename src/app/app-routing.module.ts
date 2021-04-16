import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllSkillsComponent } from './Components/all-skills/all-skills.component';
import { AllComponent } from './Components/all/all.component';

const routes: Routes = [
  {path: 'all', component: AllComponent},
  { path: '', pathMatch: 'full', redirectTo: 'all'},
  {path: 'allSkills', component: AllSkillsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'all'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
