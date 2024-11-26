import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenSinkComponent } from './kitchen-sink/kitchen-sink.component';
import { DynamicImportComponent } from './dynamic-import/dynamic-import.component';

const routes: Routes = [
  {
    path: "",
    component: KitchenSinkComponent
  },
  {
    path: "dynamicImport",
    component: DynamicImportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }