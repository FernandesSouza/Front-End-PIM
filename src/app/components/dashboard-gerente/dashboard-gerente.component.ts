import { Component, ViewChild  } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard-gerente',
  templateUrl: './dashboard-gerente.component.html',
  styleUrls: ['./dashboard-gerente.component.css']
})

export class DashboardGerenteComponent{

  constructor(private observer: BreakpointObserver) {}

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

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

}
