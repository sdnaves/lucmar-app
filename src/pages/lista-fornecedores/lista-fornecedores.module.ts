import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaFornecedoresPage } from './lista-fornecedores';

@NgModule({
  declarations: [
    ListaFornecedoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaFornecedoresPage),
  ],
  exports: [
    ListaFornecedoresPage
  ]
})
export class ListaFornecedoresPageModule {}
