import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  @Output() titulo: string = '';

  constructor(private router: Router) { }

  irParaPaginaDeLogin() {
    // Aqui você pode definir a ação desejada, como navegar para a página de login
    this.router.navigate(['/login']); // Exemplo de navegação para a página de login
  }

}
