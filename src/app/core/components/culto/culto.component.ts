import { Component, OnInit } from '@angular/core';
import { MembroComponent } from '../membro/membro.component';
import { criarCulto } from 'src/environments/environment';
import { Culto } from 'src/app/models/models';

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

  culto?: Culto;

  ngOnInit() {}

  onSubmit() {

    this.culto = {
      titulo: this.titulo,
      descricao: this.descricao,
      data: this.data,
      hora: this.hora
    };

    criarCulto(this.culto);
    
      // Faça algo com os valores do formulário (por exemplo, enviar para um serviço de registro)
    
  }
}