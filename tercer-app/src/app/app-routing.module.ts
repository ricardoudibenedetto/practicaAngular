import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaCompComponent } from './tabla-comp/tabla-comp.component';

const routes: Routes = [
  {path :'',redirectTo:'tabla/ARG', pathMatch:'full'},
  {path :'tabla/:pais', component: TablaCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
