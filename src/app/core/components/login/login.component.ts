import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/models';
import { entrarGerente } from 'src/environments/environment';

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
  usuarios?: Usuario;

  ngOnInit() { }

  onSubmit() {
      if(this.email !== '' && this.senha !== '') {   
        const email = this.email || '';
        const senha = this.senha || '';    
        
        this.usuarios = {          
          email: email,
          senha: senha
        }

        const resp = entrarGerente(this.usuarios);
        console.log(resp);
      }

      console.log("E-mail:", this.email);
      console.log("Senha:", this.senha);
  }
}