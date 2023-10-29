import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { Observable } from "rxjs";
import { FuncionarioModel } from "../Models/FuncionarioModel";
import { TitleStrategy } from "@angular/router";


@Injectable({

  providedIn: 'root'

  })

  export class CadastroService{
    private matricula: string = '';
    constructor(private httpClient:HttpClient){

    }
    setMatricula(matricula: string) {
      this.matricula = matricula;
    }

    obterMatricula(): string {
      return this.matricula;
    }


    private readonly baseUrl = environment["endPoint"]

    cadastrarFuncionario(funcionario: FuncionarioModel) {
      const token = localStorage.getItem('token');
      const matricula = localStorage.getItem('matricula');

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      
      return this.httpClient.post<void>(`${this.baseUrl}/Funcionario`, funcionario, { headers });
    }


  }
