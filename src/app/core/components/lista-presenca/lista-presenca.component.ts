import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../../shared/userDados/user.service';

@Component({
  selector: 'app-lista-presenca',
  templateUrl: './lista-presenca.component.html',
  styleUrls: ['./lista-presenca.component.scss'],
})
export class ListaPresencaComponent implements OnInit {

  @Output() titulo: string = '';
  @Output() nomeUsuarioLogado: string = this.userService.userData != null ? this.userService.userData.UsuarioLogado.nome : 'teste 12';
  membros: any = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.membros.push({ name: 'Émerson', isPresent: false }, { name: 'Émerson 1', isPresent: true }, { name: 'Émerson 2', isPresent: false })
  }

  submitList() {
    console.log('teste');
  }

}
