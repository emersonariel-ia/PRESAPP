import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {

  @Input() titulo?: string = "Betânia";
  @Input() urlBack?: string = "/";

  constructor() { }


  ngOnInit() {
  }

}
