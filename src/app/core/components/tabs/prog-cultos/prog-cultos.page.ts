import { Component, Output } from '@angular/core';
import { Services } from 'src/app/core/shared/servicos/services.service';
import { Culto } from 'src/app/models/models';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';
import { format } from 'date-fns';
import { FormatacaoEConversaoService } from 'src/app/core/shared/servicos/formatacaoEConversao/formatacaoOuConversao.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'prog-cultos.page.html',
  styleUrls: ['prog-cultos.page.scss']
})
export class ProgCultos {

  @Output() titulo: string = 'Programação de culto';

  cultos: any = [];
  eventos: any = [];

  constructor(private service: Services, private afDatabase: AngularFireDatabase, private formatacaoOuConvercao: FormatacaoEConversaoService) { }

  ngOnInit() {
    //this.cultos = this.afDatabase.list('/eventos');
    this.eventos = this.afDatabase.object('/eventos');

    // Leia os dados do objeto
    this.eventos.valueChanges().subscribe((data: Culto) => {
      this.cultos = [];
      Object.entries(data).map(d => {
        var objDado = d[1];
        this.cultos.push(Object.assign(objDado, { codEvento: d[0] }));
      })
      console.log('Dados do objeto:', this.cultos[1].presenca);
    });
  }

  formatDate(dateString: string): string {
    return this.formatacaoOuConvercao.formatDate(dateString);
  }
}

