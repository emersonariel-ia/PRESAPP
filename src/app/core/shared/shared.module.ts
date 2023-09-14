import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [CabecalhoComponent],
    imports: [CommonModule, IonicModule.forRoot(), FormsModule],
    exports: [CabecalhoComponent],
})
export class SharedModule { }