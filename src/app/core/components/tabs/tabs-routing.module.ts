import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ListaPresencaComponent } from '../lista-presenca/lista-presenca.component';
import { CadastroMembroComponent } from '../cadastro-membro/cadastro-membro.component';
import { CultoComponent } from '../culto/culto.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./prog-cultos/prog-cultos.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'relatorios',
        loadChildren: () => import('./relatorios/relatorios.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'lista-presenca',
        component: ListaPresencaComponent
      },
      {
        path: 'cadastro-membro',
        component: CadastroMembroComponent
      },
      {
        path: 'registro-culto',
        component: CultoComponent
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
