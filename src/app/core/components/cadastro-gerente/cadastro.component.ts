import { Component, OnInit, Output } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Services } from '../../shared/services.service';
import { Usuario } from 'src/app/models/models';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})

export class CadastroComponent implements OnInit {
  nome?: string;
  email!: string;
  senha!: string;
  repetirSenha?: string;

  usuarios?: Usuario;

  component = LoginComponent;

  @Output() titulo = "Cadastro Gerente";

  constructor(private router: Router, private toastController: ToastController, private service: Services) { }
  public toastButtons = [
    {
      text: 'fechar',
      role: 'cancel',
    },
  ];
  ngOnInit() { }

  async onSubmit() {

    if (this.senha !== this.repetirSenha) {
      console.error("As senhas não coincidem.");
    } else {

      this.usuarios = {
        nome: this.nome,
        email: this.email,
        senha: this.senha
      }

      this.service.criaGerente(this.usuarios);

      const toast = await this.toastController.create({
        message: 'Gerente cadastrado com sucesso.',
        duration: 5000,
        position: 'bottom',
        cssClass: 'success-toast',
        buttons: this.toastButtons
      });

      await toast.present();

      // Redirecionar para a próxima página após o login
      //this.router.navigate(['/login']);
    }
  }
}