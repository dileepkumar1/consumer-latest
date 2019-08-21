import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassificationComponent } from './classification/classification.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home',
     component: NavigationComponent,
     children:[
      {path:'', redirectTo:'dashboard', pathMatch:'full'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'classification', component: ClassificationComponent},
      {path:'**', redirectTo:'dashboard', pathMatch:'full'}

     ]
  },
  { path: 'login', component: LoginComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
