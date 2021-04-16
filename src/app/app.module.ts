import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ExercisesComponent } from './Components/exercises/exercises.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AllSkillsComponent } from './Components/all-skills/all-skills.component';
import { AllComponent } from './Components/all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExercisesComponent,
    ContactComponent,
    FooterComponent,
    AllSkillsComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
