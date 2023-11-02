import { Component, ViewChild  } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-funcionario',
  templateUrl: './menu-funcionario.component.html',
  styleUrls: ['./menu-funcionario.component.css']
})
export class MenuFuncionarioComponent {


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
