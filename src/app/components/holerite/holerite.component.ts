import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Holerite } from 'src/app/Models/Holerite';
import { HoleriteService } from 'src/app/service/holeriteService';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-holerite',
  templateUrl: './holerite.component.html',
  styleUrls: ['./holerite.component.css']
})
export class HoleriteComponent implements OnInit {




  holerite$ = new BehaviorSubject<Holerite | null>(null);


  data: string =''

constructor(private holeriteService: HoleriteService){



}

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





