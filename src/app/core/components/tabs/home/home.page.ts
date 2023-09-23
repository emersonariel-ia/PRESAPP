import { Component, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/shared/userDados/user.service';
import { Eventos } from 'src/app/models/eventos';
import { take } from 'rxjs/operators'; // Importe a função take
import { format } from 'date-fns';
import { LoadingService } from 'src/app/core/shared/servicos/loading/loading.service';
import { FormatacaoEConversaoService } from 'src/app/core/shared/servicos/formatacaoEConversao/formatacaoOuConversao.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  @Output() titulo: string = '';
  @Output() nomeUsuarioLogado: string = this.userService.userData != null ? this.userService.userData.UsuarioLogado.nome : '';

  usuarioLogado: boolean = this.userService.logado;

  objEvento: any[] = [];
  exibeConteudo: boolean = false;

  constructor(private router: Router, private userService: UserService, private afDatabase: AngularFireDatabase, private loadingService: LoadingService, private formatacaoOuConvercao: FormatacaoEConversaoService, private storage: Storage) { }

  async ngOnInit() {
    await this.loadingService.exibirLoading();
    // Valida se usuario esta logado
    this.usuarioLogado = this.userService.logado;

    this.afDatabase
      .list('/eventos', (ref) => ref.orderByChild('data').limitToLast(1)) // Substitua o caminho e o limite conforme necessário
      .snapshotChanges()
      .pipe(take(1)) // Use take para limitar a 5 itens
      .subscribe((snapshots) => {
        snapshots.forEach((snapshot: any) => {
          // A chave está disponível em snapshot.key
          const codEvento = snapshot.key;
          const dadosEvento = Object.assign({}, snapshot.payload.val());
          this.objEvento.push(Object.assign(dadosEvento, { codEvento: codEvento }));
        });

        this.exibeConteudo = true;
        this.loadingService.esconderLoading();
      });
  }

  irParaPaginaDeLogin() {
    // Aqui você pode definir a ação desejada, como navegar para a página de login
    this.router.navigate(['/login']); // Exemplo de navegação para a página de login
  }

  formatDate(dateString: string): string {
    return this.formatacaoOuConvercao.formatDate(dateString);
  }
}
