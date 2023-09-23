import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ToastPosition } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemToastService {

  constructor(private toastController: ToastController, private router: Router) { }

  public toastButtons = [
    {
      text: 'fechar',
      role: 'cancel',
    },
  ];

  async mensagemDeSucesso(pMessange: string, pPosition: ToastPosition = 'bottom', pDuration: number = 5000, pUrlNavigation: string = '') {
    const toast = await this.toastController.create({
      message: pMessange,
      duration: pDuration,
      position: pPosition,
      cssClass: 'success-toast',
      buttons: this.toastButtons
    });

    await toast.present();

    if (pUrlNavigation != '') {
      await toast.onDidDismiss();

      this.router.navigate([pUrlNavigation]);
    }
  }

  async mensagemErro(pMessange: string, pPosition: ToastPosition = 'bottom', pDuration: number = 4000) {
    const toast = await this.toastController.create({
      message: pMessange,
      duration: pDuration,
      position: pPosition,
      cssClass: 'error-toast',
      buttons: this.toastButtons
    });

    await toast.present();
  }
}