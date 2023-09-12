import { Component, OnInit } from '@angular/core';
import { MembroComponent } from '../membro/membro.component';

@Component({
  selector: 'app-culto',
  templateUrl: './culto.component.html',
  styleUrls: ['./culto.component.scss'],
})
export class CultoComponent  implements OnInit {

  constructor() { }

  titulo?:string;
  descricao?:string;
  foto?:string;
  data?:Date;
  hora?:string;
  numeroPresentes?:number;
  presentes: MembroComponent[] = [];


  ngOnInit() {}
}