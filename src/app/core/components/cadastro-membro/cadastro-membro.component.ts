import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-membro',
  templateUrl: './cadastro-membro.component.html',
  styleUrls: ['./cadastro-membro.component.scss'],
})
export class CadastroMembroComponent  implements OnInit {

  constructor() { }

  nome?:string;
  frequenciaPorcentagem?:number;
  qtDiasComparecidos?:number;
  ministerio?:string;
  dataIngresso?:Number;

  ngOnInit() {
    
  }

  onSubmit() {

    this.frequenciaPorcentagem = 0;
    this.qtDiasComparecidos = 1;
    this.dataIngresso = Date.now();
  }
}