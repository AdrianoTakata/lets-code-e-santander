import { Identifiers } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { BebesComponent } from './bebes/bebes.component';
import { ComputadoresComponent } from './computadores/computadores.component';
import { EletronicosComponent } from './eletronicos/eletronicos.component';
import { IdeiasComponent } from './ideias/ideias.component';
import { VendasComponent } from './vendas/vendas.component';

const routes: Routes = [
  { path: 'vendas', component: VendasComponent },
  { path: 'eletronicos', component: EletronicosComponent },
  { path: 'computadores', component: ComputadoresComponent },
  { path: 'atendimento', component: AtendimentoComponent },
  { path: 'ideias', component: IdeiasComponent },
  { path: 'bebes', component: BebesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
