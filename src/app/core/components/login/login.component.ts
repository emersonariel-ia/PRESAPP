import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/models';
import { UserService } from '../../shared/userDados/user.service';
import { Router } from '@angular/router';
import { Services } from '../../shared/servicos/services.service';
import { MensagemToastService } from '../../shared/servicos/mensagemToast/mensagem-toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private service: Services, private serviceMensagem: MensagemToastService) { }

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

      const retornoLogin = this.service.entrarGerente(this.usuarios);
      if (retornoLogin == 1) {
        this.userService.logado = true;

        this.userService.userData = {
          UsuarioLogado: {
            nome: 'Émerson',
            email: this.email,
            senha: this.senha
          }
        }
      }

      this.serviceMensagem.mensagemDeSucesso('Usuário logado com sucesso!', 'bottom', 1000, '/')
    }
  }
}