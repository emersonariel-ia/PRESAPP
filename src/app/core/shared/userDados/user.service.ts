import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData: any;
  logado: boolean = false;
  private carregadoSubject = new BehaviorSubject<boolean>(false);
  carregado$ = this.carregadoSubject.asObservable();

  constructor(private storage: Storage) {
    this.storage.create();

    this.storage.get('usuario').then((dados) => {
      if (dados) {
        // Faça algo com os dados recuperados
        this.userData = dados.userData;
        this.logado = dados.logado;
        console.log('Dados recuperados da sessão:', this.logado);
        // Quando o serviço estiver pronto, emita true
        this.carregadoSubject.next(true);
      } else {
        console.log('Nenhum dado encontrado na sessão.');
      }
    });
  }
}
