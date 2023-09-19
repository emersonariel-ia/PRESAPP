import { Component, OnInit } from '@angular/core';
import { MembroComponent } from '../membro/membro.component';
import { Services } from '../../shared/services.service';
import { Culto } from 'src/app/models/models';

@Component({
  selector: 'app-culto',
  templateUrl: './culto.component.html',
  styleUrls: ['./culto.component.scss'],
})
export class CultoComponent  implements OnInit {

  constructor(private service: Services) { }

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

    this.service.criarCulto(this.culto);
  }
}