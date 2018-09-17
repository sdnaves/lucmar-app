import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { itemEstoque } from '../../models/item-estoque';
import { PedidoPage } from '../pedido/pedido';
import { PedidosServiceProvider } from '../../providers/pedidos-service/pedidos-service';

@IonicPage()
@Component({
  selector: 'page-cadastro-pedidos',
  templateUrl: 'cadastro-pedidos.html',
})
export class CadastroPedidosPage {

  public estoque: itemEstoque[]; 

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private pedServ: PedidosServiceProvider) {
  }

  ionViewDidLoad() {
    this.pedServ.getPedidos().then((estoque) => {
      console.log(estoque);
      this.estoque = estoque;
    });
  }

  confirmaPedido(item: itemEstoque) {
    this.navCtrl.push(PedidoPage.name, { itemSelecionado: item });
  }
}
