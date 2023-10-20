import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, finalize, map } from "rxjs";
import { NgxSpinner, NgxSpinnerService } from "ngx-spinner";
import { AuthService } from "../service/authService";


@Injectable()
export class HTTPStatus{

private requestInFligth$: BehaviorSubject<boolean>;

constructor(){

  this.requestInFligth$ = new BehaviorSubject<boolean>(false);

}




setHttpStatus(inFlight: boolean){

  this.requestInFligth$.next(inFlight);
}
getHttpStatus(): Observable<boolean>{

  return this.requestInFligth$.asObservable();


}

}


@Injectable()
export class loaderInterceptor implements HttpInterceptor{


private _requests = 0;

constructor(

  private spinner: NgxSpinnerService,
  private status: HTTPStatus,
  private authService: AuthService,
  private router: Router,



){   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  ++ this._requests;
  let headers;

    throw new Error("Method not implemented.");
  }



}
