import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  irParaPaginaDeLogin() {
    // Aqui você pode definir a ação desejada, como navegar para a página de login
    this.router.navigate(['/login']); // Exemplo de navegação para a página de login
  }

}
