import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component'
import { ListaComponent } from './paginas/lista/lista.component'
import { ContatoComponent } from './paginas/contato/contato.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'contato', component: ContatoComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
