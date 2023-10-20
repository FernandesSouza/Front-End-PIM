import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { Holerite } from "../Models/Holerite";
import { Observable } from "rxjs";

@Injectable({

providedIn: 'root'

})

export class HoleriteService{

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



  obterHoleriteUnico(datapgto: string): Observable<any>{

    const token = localStorage.getItem('token');
    const matricula = localStorage.getItem('matricula');


     return this.httpClient.get<any>(`${this.baseUrl}/Holerite/${datapgto}` , {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });


  }

}
