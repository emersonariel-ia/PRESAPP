import { Component, OnInit } from '@angular/core';
import { MembroComponent } from '../membro/membro.component';

@Component({
  selector: 'app-cadastro-membro',
  templateUrl: './cadastro-membro.component.html',
  styleUrls: ['./cadastro-membro.component.scss'],
})
export class CadastroMembroComponent  implements OnInit {

  constructor() { }

  membro = MembroComponent;

  ngOnInit() {
    
  }

  onSubmit() {

  }

}
