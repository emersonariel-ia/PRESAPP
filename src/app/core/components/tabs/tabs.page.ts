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

}
