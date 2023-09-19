import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/shared/userDados/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  @Output() titulo: string = '';
  @Output() nomeUsuarioLogado: string = this.userService.userData != null ? this.userService.userData.UsuarioLogado.nome : 'teste 12';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    console.log('dados', this.userService.userData);
  }

  irParaPaginaDeLogin() {
    // Aqui você pode definir a ação desejada, como navegar para a página de login
    this.router.navigate(['/login']); // Exemplo de navegação para a página de login
  }

}
