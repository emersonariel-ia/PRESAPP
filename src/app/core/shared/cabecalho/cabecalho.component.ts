import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {

  @Input() titulo?: string = "Betânia";
  @Input() urlBack?: string = "/";
  @Input() nomeUser?: string = "";

  constructor(private router: Router) { }

  paraLogin() {
    
  }
  ngOnInit() {
  }

}
