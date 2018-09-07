import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPedidosPage } from './lista-pedidos';

@NgModule({
  declarations: [
    ListaPedidosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPedidosPage),
  ],
  exports: [
    ListaPedidosPage
  ]
})
export class ListaPedidosPageModule {}
