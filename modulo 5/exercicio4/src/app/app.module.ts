import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendasComponent } from './vendas/vendas.component';
import { EletronicosComponent } from './eletronicos/eletronicos.component';
import { ComputadoresComponent } from './computadores/computadores.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { IdeiasComponent } from './ideias/ideias.component';
import { BebesComponent } from './bebes/bebes.component';

@NgModule({
  declarations: [
    AppComponent,
    VendasComponent,
    EletronicosComponent,
    ComputadoresComponent,
    AtendimentoComponent,
    IdeiasComponent,
    BebesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
