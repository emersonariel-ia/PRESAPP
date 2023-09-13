import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { CadastroComponent } from './core/components/cadastro-gerente/cadastro.component';
import { HomeComponent } from './core/components/home/home.component';
import { RelatoriosComponent } from './core/components/relatorios/relatorios.component';
import { CultoComponent } from './core/components/culto/culto.component';
import { CadastroMembroComponent } from './core/components/cadastro-membro/cadastro-membro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-gerente', component: CadastroComponent },
  { path: 'relatorios', component: RelatoriosComponent},
  { path: 'registro-culto', component: CultoComponent},
  { path: 'cadastro-membro', component: CadastroMembroComponent},
  { path: 'teste', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
