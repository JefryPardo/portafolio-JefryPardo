import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioComponent } from './portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { PortafolioRoutingModule } from './portafolio-routing.module';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  
  declarations: [
    PortafolioComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    SkillsComponent,
    WorkExperienceComponent,
    HomeComponent
  ],

  imports: [
    CommonModule,
    PortafolioRoutingModule
  ]

})
export class PortafolioModule { }
