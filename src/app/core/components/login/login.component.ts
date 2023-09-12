import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  //constructor() { }

  email?: string;
  senha?: string;

  component = LoginComponent;

  ngOnInit() { }

  onSubmit() {
    // Implemente a lógica de validação e registro de usuário aqui
    
      // Faça algo com os valores do formulário (por exemplo, enviar para um serviço de registro)
      console.log("E-mail:", this.email);
      console.log("Senha:", this.senha);
  }
}