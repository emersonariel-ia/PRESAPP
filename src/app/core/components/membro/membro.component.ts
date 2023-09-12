import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.scss'],
})
export class MembroComponent  implements OnInit {

  //constructor() { }

  frequencia?:number;
  diasComparecidos?:number;
  ministerio?:string;
  

  ngOnInit() {}

}
