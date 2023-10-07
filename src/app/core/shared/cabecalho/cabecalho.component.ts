import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../userDados/user.service';
import { Storage } from '@ionic/storage-angular';
import { MensagemToastService } from '../servicos/mensagemToast/mensagem-toast.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {

  @Input() titulo?: string = "Betânia";
  @Input() urlBack?: string = "/";
  @Input() usuarioLogado: boolean = false;

  constructor(private router: Router, private userService: UserService, private storage: Storage, private serviceMensagem: MensagemToastService) { }

  paraLogin() {

  }
  async ngOnInit() { }

  sairLogin() {
    this.storage.remove('usuarioLogado');
    this.serviceMensagem.mensagemDeSucesso('Usuário deslogado com sucesso!', 'bottom', 1000, '/')
  }

}
