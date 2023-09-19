import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/models';
import { entrarGerente } from 'src/environments/environment';
import { UserService } from '../../shared/userDados/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  nome?: string;
  email?: string;
  senha?: string;

  component = LoginComponent;
  usuarios?: Usuario;

  ngOnInit() {
    console.log('dados', this.userService.userData);
  }

  onSubmit() {
    if (this.email !== '' && this.senha !== '') {
      const email = this.email || '';
      const senha = this.senha || '';

      this.usuarios = {
        email: email,
        senha: senha
      }

      entrarGerente(this.usuarios);
      this.userService.userData = {
        UsuarioLogado: {
          nome: 'Émerson',
          email: this.email,
          senha: this.senha
        }
      }

      // Redirecionar para a próxima página após o login
      this.router.navigate(['/']);
      //console.log(this.userService.userData);
    }
  }
}