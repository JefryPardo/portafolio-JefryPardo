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
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  
  declarations: [
    PortafolioComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    SkillsComponent,
    WorkExperienceComponent,
    HomeComponent,
    WelcomeComponent,
    FooterComponent,
    ChatComponent
  ],

  imports: [
    CommonModule,
    PortafolioRoutingModule,
    ReactiveFormsModule
  ]

})
export class PortafolioModule { }
