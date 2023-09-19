import { Component, Output } from '@angular/core';
import { Services } from 'src/app/core/shared/services.service';
import { Culto } from 'src/app/models/models';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';
import { format } from 'date-fns';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @Output() titulo: string = 'Programação de culto';

  cultos: any = [];
  eventos: any = [];

  constructor(private service: Services, private afDatabase: AngularFireDatabase) { }

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
      console.log('Dados do objeto:', this.cultos);
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy HH:mm');
  }
}

