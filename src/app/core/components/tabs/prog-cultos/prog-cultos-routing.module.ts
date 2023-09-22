import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgCultos } from './prog-cultos.page';

const routes: Routes = [
  {
    path: '',
    component: ProgCultos,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgCultosPageRoutingModule {}
