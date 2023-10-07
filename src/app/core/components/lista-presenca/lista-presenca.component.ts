import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../../shared/userDados/user.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Presenca } from 'src/app/models/Presenca';
import { Services } from '../../shared/servicos/services.service';
import { Membro } from 'src/app/models/models';
import { LoadingService } from '../../shared/servicos/loading/loading.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-lista-presenca',
  templateUrl: './lista-presenca.component.html',
  styleUrls: ['./lista-presenca.component.scss'],
})
export class ListaPresencaComponent implements OnInit {

  @Output() titulo: string = 'Lista de presença do culto';

  usuarioLogado: boolean = false;
  membros: any = [];
  listaDePresenca: any = [];
  listaDePresencaCongelada: any = [];
  listaDeMebros: any = [];
  objDados: any = [];
  totalMembros: number = 0;
  membrosPresentes: number = 0;
  exibeConteudo: Boolean = false;

  // Obtenha a URL atual
  url = window.location.href;
  // Parse a URL para um objeto URLSearchParams
  params = new URLSearchParams(new URL(this.url).search);
  codEvento?: any = this.params.get('codEvento');
  modo?: any = this.params.get('modo');

  public listaFiltrada: any = [];
  searchTerm: string = ''; // Termo de pesquisa


  constructor(private userService: UserService, private afDatabase: AngularFireDatabase, private service: Services, private loadingService: LoadingService, private storage: Storage) { }

  async ngOnInit() {
    this.usuarioLogado = await this.storage.get('usuarioLogado');
    this.objDados = this.afDatabase.object('eventos/' + this.codEvento + '/presenca');
    if (this.modo == 'novo') {
      // Consulta para pegar todos os membros
      this.membros = this.afDatabase.object('membros');
      this.membros.valueChanges().subscribe((data: Membro) => {
        Object.entries(data).map(d => {
          this.service.addMembrosAoEvento(d[1], d[0], this.codEvento);
        })
        this.buscaTodosOsDados();
      });
    } else {
      this.buscaTodosOsDados();
    }
  }

  async checkboxChanged(event: any, codMembro: string) {
    try {
      this.exibeConteudo = false;
      // Obtém o novo valor do checkbox do evento
      const novoValor = event.target.checked;
      /// Atualize o valor correspondente no Firebase
      await this.afDatabase.object('eventos/' + this.codEvento + '/presenca/' + codMembro).update({ presencaConfirmada: novoValor });

      if (this.searchTerm !== "") {
        this.listaFiltrada = this.listaDePresencaCongelada.filter((item: any) =>
          item.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        this.listaDePresenca = this.listaFiltrada;
        this.exibeConteudo = true;
      } else {
        this.buscaTodosOsDados();
      }
    }
    catch (error) {
      console.error('Erro ao atualizar valor no Firebase:', error);
    }

  }

  handleInput(event: any) {
    this.exibeConteudo = false;
    const query = event.target.value.toLowerCase();
    if (this.searchTerm !== "") {
      this.listaFiltrada = this.listaDePresencaCongelada.filter((item: any) =>
        item.nome.toLowerCase().includes(query.toLowerCase())
      );
      this.listaDePresenca = this.listaFiltrada;
      this.exibeConteudo = true;
    } else {
      this.buscaTodosOsDados();
    }
  }

  onSearch(event: CustomEvent) {
    const termoDePesquisa = event.detail.value;
    // Realize ações de pesquisa com o termo de pesquisa.
  }

  async buscaTodosOsDados() {
    await this.loadingService.exibirLoading();

    this.objDados.valueChanges().subscribe((data: Presenca) => {
      this.listaDePresenca = [];
      this.listaDePresencaCongelada = [];
      this.totalMembros = 0;
      this.membrosPresentes = 0;
      Object.entries(data).map(d => {
        var objDado = d[1];
        if (objDado.presencaConfirmada) {
          this.totalMembros++;
          this.membrosPresentes++;
        } else {
          this.totalMembros++;
        }
        this.listaDePresenca.push(Object.assign(objDado, { codMembro: d[0] }));
        this.listaDePresencaCongelada = this.listaDePresenca;
      })
      this.loadingService.esconderLoading();
    });
    this.exibeConteudo = true;
  }
}

