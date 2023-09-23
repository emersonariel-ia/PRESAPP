import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../userDados/user.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {

  @Input() titulo?: string = "Betânia";
  @Input() urlBack?: string = "/";
  @Input() nomeUser?: string = "";
  @Input() usuarioLogado: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  paraLogin() {

  }
  async ngOnInit() { }

}
