import { Component } from '@angular/core';
import { UserService } from '../../shared/userDados/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  usuarioLogado: boolean = this.userService.logado;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Valida se usuario esta logado
    // Inscreva-se no evento carregado$
    this.userService.carregado$.subscribe((carregado) => {
      if (carregado) {
        // O serviço está pronto, agora você pode usá-lo
        this.usuarioLogado = this.userService.logado;
      }
    });

  }

}
