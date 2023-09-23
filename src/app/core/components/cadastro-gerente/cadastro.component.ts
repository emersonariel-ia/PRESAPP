import { Component, OnInit, Output } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Services } from '../../shared/servicos/services.service';
import { Usuario } from 'src/app/models/models';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MensagemToastService } from '../../shared/servicos/mensagemToast/mensagem-toast.service';

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

  constructor(private router: Router, private serviceMensagem: MensagemToastService, private service: Services) { }
 
  ngOnInit() { }

  async onSubmit() {

    if (this.senha !== this.repetirSenha) {
      console.error("As senhas não coincidem.");
      this.serviceMensagem.mensagemErro("As senhas não coincidem.");
    } else {

      this.usuarios = {
        nome: this.nome,
        email: this.email,
        senha: this.senha
      }

      this.service.criaGerente(this.usuarios);
    }
  }
}