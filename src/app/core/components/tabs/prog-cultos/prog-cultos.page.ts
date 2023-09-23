import { Component, Output } from '@angular/core';
import { Services } from 'src/app/core/shared/servicos/services.service';
import { Culto } from 'src/app/models/models';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormatacaoEConversaoService } from 'src/app/core/shared/servicos/formatacaoEConversao/formatacaoOuConversao.service';
import { LoadingService } from 'src/app/core/shared/servicos/loading/loading.service';

@Component({
  selector: 'app-prog-cultos',
  templateUrl: 'prog-cultos.page.html',
  styleUrls: ['prog-cultos.page.scss']
})
export class ProgCultos {

  @Output() titulo: string = 'Programação de culto';

  cultos: any = [];
  eventos: any = [];

  constructor(private service: Services, private afDatabase: AngularFireDatabase, private formatacaoOuConvercao: FormatacaoEConversaoService, private loadingService: LoadingService) { }

  async ngOnInit() {
    await this.loadingService.exibirLoading();
    //this.cultos = this.afDatabase.list('/eventos');
    this.eventos = this.afDatabase.list('/eventos', (ref) => ref.orderByChild('data').limitToLast(10));

    // Leia os dados do objeto
    this.eventos.valueChanges().subscribe((data: Culto) => {
      console.log('Dados do objeto:', data);
      this.cultos = [];
      Object.entries(data).map(d => {
        var objDado = d[1];
        this.cultos.push(Object.assign(objDado, { codEvento: d[0] }));
      })
      this.loadingService.esconderLoading();
    });
  }

  formatDate(dateString: string): string {
    return this.formatacaoOuConvercao.formatDate(dateString);
  }
}

