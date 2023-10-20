import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environment";

@Injectable({

providedIn: 'root'

})


export class LoginGerenteService{

  constructor(private httpClient:HttpClient){

  }

  private readonly baseUrl = environment["endPoint"] ;


  loginGerente(usuario: string, senha: string){


     return this.httpClient.post<any>(`${this.baseUrl}/Auth/LoginGerente`,{usuario, senha});

  }


}
