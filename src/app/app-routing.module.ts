import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { BodegasComponent } from './pages/bodegas/bodegas.component';

const routes: Routes = [

  {path: 'bodegas', component: BodegasComponent},
  {path: 'form', component: FormComponent},
  {path: '', redirectTo:'bodegas', pathMatch:'full'},
  {path: '**', component: BodegasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
