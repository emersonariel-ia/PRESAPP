import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { criaGerente } from 'src/environments/environment';
import { Usuario } from 'src/app/models/models';

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

  //constructor() { }

  ngOnInit() { }

  onSubmit() {

    if (this.senha !== this.repetirSenha) {
      console.error("As senhas não coincidem.");
    } else {

      this.usuarios = {
        nome: this.nome,
        email: this.email,
        senha: this.senha
      }

      criaGerente(this.usuarios);

      console.log("Nome:", this.nome);
      console.log("E-mail:", this.email);
      console.log("Senha:", this.senha);
    }
  }
}