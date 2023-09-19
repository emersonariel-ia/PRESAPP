import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/models';
import { Services } from '../../shared/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(private service: Services) { }

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

        const resp = this.service.entrarGerente(this.usuarios);
        console.log(resp);
      }

      console.log("E-mail:", this.email);
      console.log("Senha:", this.senha);
  }
}