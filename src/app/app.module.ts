import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './core/components/cadastro-gerente/cadastro.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { RelatoriosComponent } from './core/components/relatorios/relatorios.component';
import { CultoComponent } from './core/components/culto/culto.component';
import { CadastroMembroComponent } from './core/components/cadastro-membro/cadastro-membro.component';

@NgModule({
  declarations: [AppComponent, CadastroComponent, HomeComponent, LoginComponent, RelatoriosComponent
  , CultoComponent, CadastroMembroComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
