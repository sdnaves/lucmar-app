import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPedidosPage } from './cadastro-pedidos';

@NgModule({
  declarations: [
    CadastroPedidosPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPedidosPage),
  ],
  exports: [
    CadastroPedidosPage
  ]
})
export class CadastroPedidosPageModule {}
