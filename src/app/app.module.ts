import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbUserModule,NbThemeModule,NbTreeGridModule,NbSelectModule,NbDialogModule, NbInputModule,NbDatepickerModule, NbLayoutModule,NbSidebarModule, NbSidebarService, NbButtonModule,NbActionsModule,NbCardModule,NbMenuModule,NbListModule,NbCheckboxModule, NbTabsetModule,} from '@nebular/theme';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './auth/login/login.component';
import { ClassificationComponent } from './classification/classification.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    ClassificationComponent,
    DashboardComponent,
  ],
  imports: [
    NbUserModule,
    NbTreeGridModule,
    NbEvaIconsModule,
    NbIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbTabsetModule,
    NbLayoutModule,
    NbSidebarModule,
    NbActionsModule,
    NbCardModule,
    NbMenuModule,
    NbListModule,
    NbCheckboxModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
