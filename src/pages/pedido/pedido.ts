import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { itemEstoque } from '../../models/item-estoque';

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  item: itemEstoque;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
                this.item = this.navParams.get('itemSelecionado');
  }
}
