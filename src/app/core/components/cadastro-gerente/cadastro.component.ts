import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { getDatabase, onValue, ref, set } from 'firebase/database';

// import { database, db } from 'src/environments/environment';

import { alterarUsuario } from 'src/environments/environment';
import { Usuario } from 'src/app/models/models';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  nome?: string;
  email?: string;
  senha?: string;
  repetirSenha?: string;

  usuarios?: Usuario;

  component = LoginComponent;


  //constructor() { }

  ngOnInit() { }


  onSubmit() {

    // Implemente a lógica de validação e registro de usuário aqui
    if (this.senha !== this.repetirSenha) {
      // As senhas não coincidem, exiba uma mensagem de erro
      console.error("As senhas não coincidem.");
    } else {
      
      // const { v4: uuidv4 } = require('uuid');      
      // set(ref(database.db, 'users/' + uuidv4()), {
      // username: this.nome,
      // email: this.email

      this.usuarios = {
        nome: this.nome,
        email: this.email
      }

      alterarUsuario(this.usuarios);


      // const db = getDatabase();

      // const { v4: uuidv4 } = require('uuid');
      // set(ref(db, 'users/' + uuidv4()), {
      //   username: this.nome,
      //   email: this.email
      // }).then(d => {
      //   console.log('>>>>>>>>>>>', d)

      // });

      // Faça algo com os valores do formulário (por exemplo, enviar para um serviço de registro)
      console.log("Nome:", this.nome);
      console.log("E-mail:", this.email);
      console.log("Senha:", this.senha);
    }
  }
}