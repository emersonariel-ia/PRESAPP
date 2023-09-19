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
import { SharedModule } from './core/shared/shared.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ListaPresencaComponent } from './core/components/lista-presenca/lista-presenca.component';

const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB6ecbkcaVRHjx5PcXHIQf_UqvEim423s8",
    authDomain: "church-manager-6ed4a.firebaseapp.com",
    databaseURL: "https://church-manager-6ed4a-default-rtdb.firebaseio.com",
    projectId: "church-manager-6ed4a",
    storageBucket: "church-manager-6ed4a.appspot.com",
    messagingSenderId: "335382472662",
    appId: "1:335382472662:web:408dfbe48642cd9ad0e677",
    measurementId: "G-7LYWJBWYVL"
  }
};

@NgModule({
  declarations: [AppComponent, CadastroComponent, LoginComponent, RelatoriosComponent
    , CultoComponent, CadastroMembroComponent, ListaPresencaComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
    MatTableModule, BrowserAnimationsModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, SharedModule,
    AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule, AngularFirestoreModule, AngularFireStorageModule,
    AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
}