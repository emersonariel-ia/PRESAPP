import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../../shared/userDados/user.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Presenca } from 'src/app/models/Presenca';
import { Services } from '../../shared/servicos/services.service';
import { Membro } from 'src/app/models/models';
import { LoadingService } from '../../shared/servicos/loading/loading.service';

@Component({
  selector: 'app-lista-presenca',
  templateUrl: './lista-presenca.component.html',
  styleUrls: ['./lista-presenca.component.scss'],
})
export class ListaPresencaComponent implements OnInit {

  @Output() titulo: string = 'Lista de presença do culto';
  //@Output() nomeUsuarioLogado: string = this.userService.userData != null ? this.userService.userData.UsuarioLogado.nome : 'teste 12';
  membros: any = [];
  listaDePresenca: any = [];
  listaDeMebros: any = [];
  objDados: any = [];

  // Obtenha a URL atual
  url = window.location.href;
  // Parse a URL para um objeto URLSearchParams
  params = new URLSearchParams(new URL(this.url).search);
  codEvento?: any = this.params.get('codEvento');
  modo?: any = this.params.get('modo');


  constructor(private userService: UserService, private afDatabase: AngularFireDatabase, private service: Services, private loadingService: LoadingService) { }

  async ngOnInit() {
    await this.loadingService.exibirLoading();

    this.objDados = this.afDatabase.object('eventos/' + this.codEvento + '/presenca');
    if (this.modo == 'novo') {
      // Consulta para pegar todos os membros
      //this.service.consultaDataBase('membros');
      this.membros = this.afDatabase.object('membros');
      this.membros.valueChanges().subscribe((data: Membro) => {
        this.listaDePresenca = [];
        Object.entries(data).map(d => {
          //this.listaDeMebros.push(Object.assign(objDado, { codMembro: d[0] }));
          this.service.addMembrosAoEvento(d[1], d[0], this.codEvento);
        })
        //console.log('Dados do objeto:', this.listaDeMebros);
      });
    }

    this.objDados.valueChanges().subscribe((data: Presenca) => {
      this.listaDePresenca = [];
      Object.entries(data).map(d => {
        var objDado = d[1];
        this.listaDePresenca.push(Object.assign(objDado, { codMembro: d[0] }));
      })
      // console.log('Dados do objeto:', this.listaDePresenca);

      this.loadingService.esconderLoading();
    });; // Use valueChanges() para obter os dados como um Observable

  }

  submitList() {
    console.log('teste');
  }

  checkboxChanged(event: any, codMembro: string) {

    // Obtém o novo valor do checkbox do evento
    const novoValor = event.target.checked;
    console.log('Novo valor do checkbox:', novoValor, codMembro);

    /// Atualize o valor correspondente no Firebase
    this.afDatabase.object('eventos/' + this.codEvento + '/presenca/' + codMembro).update({ presencaConfirmada: novoValor })
      .then(() => {
        console.log('Valor atualizado no Firebase com sucesso.');
      })
      .catch((error) => {
        console.error('Erro ao atualizar valor no Firebase:', error);
      });
  }
}

