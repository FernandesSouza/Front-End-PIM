import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';



import { DatePipe } from '@angular/common';




import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuFuncionarioComponent } from './components/menu-funcionario/menu-funcionario.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HoleriteComponent } from './components/holerite/holerite.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MenuGerenteComponent } from './components/menu-gerente/menu-gerente.component';
import { CadastroFuncionarioComponent } from './components/cadastro-funcionario/cadastro-funcionario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardGerenteComponent } from './components/dashboard-gerente/dashboard-gerente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuFuncionarioComponent,
    HoleriteComponent,
    MenuGerenteComponent,
    CadastroFuncionarioComponent,
    DashboardGerenteComponent,

  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,  CommonModule,
    FormsModule,MatSidenavModule, MatToolbarModule, MatDividerModule, MatButtonModule,
    MatIconModule, MatFormFieldModule,


    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    }),
      BrowserAnimationsModule


  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
