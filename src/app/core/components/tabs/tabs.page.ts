import { Component } from '@angular/core';
import { UserService } from '../../shared/userDados/user.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  usuarioLogado: boolean = false;

  constructor(private userService: UserService, private storage: Storage) { }

  async ngOnInit() {
    this.usuarioLogado = await this.storage.get('usuarioLogado');
  }

}
