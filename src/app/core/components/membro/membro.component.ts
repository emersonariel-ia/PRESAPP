import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.scss'],
})
export class MembroComponent  implements OnInit {

  //constructor() { }

  id?:string;
  nome?:string;
  frequenciaPorcentagem?:number;
  qtDiasComparecidos?:number;
  ministerio?:string;
  dataIngresso?:Date;
  

  ngOnInit() {}

}
