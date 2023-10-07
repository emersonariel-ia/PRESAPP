import { Component, Output } from '@angular/core';
import { Services } from 'src/app/core/shared/servicos/services.service';
import { Culto } from 'src/app/models/models';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormatacaoEConversaoService } from 'src/app/core/shared/servicos/formatacaoEConversao/formatacaoOuConversao.service';
import { LoadingService } from 'src/app/core/shared/servicos/loading/loading.service';
import { UserService } from 'src/app/core/shared/userDados/user.service';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prog-cultos',
  templateUrl: 'prog-cultos.page.html',
  styleUrls: ['prog-cultos.page.scss']
})
export class ProgCultos {
  record$!: Observable<any>;
  @Output() titulo: string = 'Programação de culto';
  usuarioLogado: boolean = false;

  cultos: any = [];
  eventos: any = [];


  constructor(private service: Services, private afDatabase: AngularFireDatabase, private formatacaoOuConvercao: FormatacaoEConversaoService,
    private loadingService: LoadingService, private userService: UserService, private storage: Storage) { }

  async ngOnInit() {
    await this.loadingService.exibirLoading();
    this.usuarioLogado = await this.storage.get('usuarioLogado');
    this.eventos = this.afDatabase.object('/eventos');
    // Leia os dados do objeto
    this.eventos.valueChanges().subscribe((data: Culto) => {
      this.cultos = [];
      Object.entries(data).map(d => {
        var objDado = d[1];
        this.cultos.push(Object.assign(objDado, { codEvento: d[0] }));
      })
    });

    await this.loadingService.esconderLoading();
  }

  formatDate(dateString: string): string {
    return this.formatacaoOuConvercao.formatDate(dateString);
  }
}

