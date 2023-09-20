import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingController: LoadingController) { }

  async exibirLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando...', // Mensagem opcional
    });
    await loading.present();
  }

  async esconderLoading() {
    await this.loadingController.dismiss();
  }
}
