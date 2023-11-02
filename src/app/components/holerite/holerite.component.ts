import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Holerite } from 'src/app/Models/Holerite';
import { HoleriteService } from 'src/app/service/holeriteService';
import { BehaviorSubject } from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-holerite',
  templateUrl: './holerite.component.html',
  styleUrls: ['./holerite.component.css']
})
export class HoleriteComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  
  constructor(private holeriteService: HoleriteService, private observer: BreakpointObserver){

  }


  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
  }


  imagePath = 'assets/imagens/logo_sargitariorh_preto.svg';



  holerite$ = new BehaviorSubject<Holerite | null>(null);


  data: string =''



  ngOnInit(): void {

    this.ObterHoleriteUnico();
  }



  ObterHoleriteUnico() {

    this.holeriteService.obterHoleriteUnico(this.data).subscribe(
      holerite => {
        console.log(holerite);
        this.holerite$.next(holerite);
      },
      err => {
        console.log(err);
      }
    );
  }
}





