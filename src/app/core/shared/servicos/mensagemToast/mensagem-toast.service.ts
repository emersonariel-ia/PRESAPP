import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastPosition } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemToastService {

  constructor(private toastController: ToastController) { }

  public toastButtons = [
    {
      text: 'fechar',
      role: 'cancel',
    },
  ];

  async mensagemDeSucesso(pMessange: string, pPosition: ToastPosition = 'bottom', pDuration: number = 5000) {
    const toast = await this.toastController.create({
      message: pMessange,
      duration: pDuration,
      position: pPosition,
      cssClass: 'success-toast',
      buttons: this.toastButtons
    });

    await toast.present();
  }
}
