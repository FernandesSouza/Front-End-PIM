import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/loginService';
import { HoleriteService } from 'src/app/service/holeriteService';
import { LoginGerenteService } from 'src/app/service/loginGerenteService';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  matricula: string = '';
  idempresa: string = '';

  usuarioFuncionario: string = '';
  senhaFuncionario: string = '';
  usuarioGerente: string = '';
  senhaGerente: string = '';


  constructor(private router: Router, private loginService: LoginService, private holeriteService: HoleriteService, private loginGerenteService: LoginGerenteService) {


  }

  ngOnInit() {
   this.Login();
   this.LoginGerente();
  }

  Login() {

    this.loginService.login(this.usuarioFuncionario, this.senhaFuncionario).subscribe(
      token => {

            localStorage.setItem('token', token.token)
            localStorage.setItem('matricula', token.funcionario.matricula)


          this.router.navigate(['/menu-funcionario']);
      },
      err => {
       console.log(err)
      }
    )
  }
  LoginGerente(){
    this.loginGerenteService.loginGerente(this.usuarioGerente, this.senhaGerente).subscribe(
        tokenGerente => {
            localStorage.setItem('token', tokenGerente.token);
            localStorage.setItem('matricula', tokenGerente.funcionario.idempresa);
            this.router.navigate(['/menu-gerente']);
        },
        error => {
            console.log(error);
        }
    );
}



}
