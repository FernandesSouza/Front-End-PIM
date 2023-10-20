import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({

  providedIn: 'root'


})

export class AuthService{


private usuarioAutenticadoPortal: boolean = false;
private token : any
private user : any;


constructor(private httpClient: HttpClient){
}



checkToken(){

return Promise.resolve(true);


}

UsuarioAutenticado(status: boolean){

  localStorage.setItem('usuarioAutenticadoPortal', JSON.stringify(status));
  this.usuarioAutenticadoPortal = status;


}

setToken(token: string){

  localStorage.setItem('token', token);
  this.token = token;

}

get getToken(){

  this.token = localStorage.getItem('token');
  return this.token;


}

//limpar o token 
limparToken(){

  this.token = null;
  this.user = null;


}
//limpar todos os dados do usuario
limparDadosUsuario(){

  this.UsuarioAutenticado(false);
  this.limparToken();
  localStorage.clear();
  sessionStorage.clear();


}

}
