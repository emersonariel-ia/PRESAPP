import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @Output() titulo: string = 'Programação de culto';

  constructor() { }

}
