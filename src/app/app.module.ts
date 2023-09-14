import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './core/components/cadastro-gerente/cadastro.component';
import { LoginComponent } from './core/components/login/login.component';
import { RelatoriosComponent } from './core/components/relatorios/relatorios.component';
import { CultoComponent } from './core/components/culto/culto.component';
import { CadastroMembroComponent } from './core/components/cadastro-membro/cadastro-membro.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [AppComponent, CadastroComponent, LoginComponent, RelatoriosComponent
    , CultoComponent, CadastroMembroComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, NgxEchartsModule.forRoot({ echarts: () => import('echarts') })
    , MatTableModule, BrowserAnimationsModule, MatPaginatorModule, MatSortModule, MatFormFieldModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
