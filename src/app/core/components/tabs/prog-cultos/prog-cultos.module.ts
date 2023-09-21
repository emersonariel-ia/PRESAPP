import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgCultos } from './prog-cultos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProgCultosPageRoutingModule } from './prog-cultos-routing.module';
import { SharedModule } from 'src/app/core/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProgCultosPageRoutingModule,
    SharedModule
  ],
  declarations: [ProgCultos]
})
export class Tab2PageModule { }
