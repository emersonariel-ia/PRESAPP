import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/models';
import { UserService } from '../../shared/userDados/user.service';
import { Router } from '@angular/router';
import { Services } from '../../shared/servicos/services.service';
import { MensagemToastService } from '../../shared/servicos/mensagemToast/mensagem-toast.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private service: Services, private serviceMensagem: MensagemToastService, private storage: Storage) { }

  nome?: string;
  email?: string;
  senha?: string;

  component = LoginComponent;
  usuarios?: Usuario;

  ngOnInit() {
    console.log('dados', this.userService.userData);
  }

  async onSubmit() {
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
        await this.storage.create();
        this.storage.set('usuario', this.userService);
      }

      this.serviceMensagem.mensagemDeSucesso('Usuário logado com sucesso!', 'bottom', 1000, '/')
    }
  }
}