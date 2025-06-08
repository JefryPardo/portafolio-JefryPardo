import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortafolioComponent } from './portafolio.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [{
    path: '', component: PortafolioComponent, children: [
        {path:'', redirectTo:'home', pathMatch:'full'},
        {path:'home', component: HomeComponent},
        {path:'chat', component: ChatComponent}
    ]
}];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortafolioRoutingModule { }