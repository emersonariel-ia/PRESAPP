import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData: any;
  logado: boolean = false;

  constructor(private storage: Storage) {
    this.storage.create();

    this.storage.get('usuario').then((dados) => {
      if (dados) {
        console.log('Dados recuperados da sessão:', dados);
        // Faça algo com os dados recuperados
        this.userData = dados.userData;
        this.logado = dados.logado;
      } else {
        console.log('Nenhum dado encontrado na sessão.');
      }
    });
  }
}
