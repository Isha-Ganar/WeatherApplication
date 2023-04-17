import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  {path: '', component: RegistrationComponent},
  {path: 'welcome', component: WelcomepageComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'user', component:UserComponent},
  {path: 'admin', component:AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
