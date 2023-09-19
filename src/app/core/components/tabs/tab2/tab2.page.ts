import { Component, Output } from '@angular/core';
import { Services } from 'src/app/core/shared/services.service';
import { Culto } from 'src/app/models/models';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @Output() titulo: string = 'Programação de culto';

  cultos:  any = [];
  
  constructor(private service: Services, private teste: AngularFireDatabase) {
    this.cultos = this.teste.list('cultos/');
  }
  
  ngOnInit() {
    //this.cultos = this.service.get();
    console.log('a', this.cultos);
  }
}

