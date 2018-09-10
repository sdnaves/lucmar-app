import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { itemEstoque } from '../../models/item-estoque';
import { PedidoPage } from '../pedido/pedido';

@IonicPage()
@Component({
  selector: 'page-cadastro-pedidos',
  templateUrl: 'cadastro-pedidos.html',
})
export class CadastroPedidosPage {

  public estoque: itemEstoque[]; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estoque = [
      { id: 1, foto: '../../assets/imgs/menu-title.jpg', nome: 'Teste - 1', preco: 100, ativo: true },
      { id: 2, foto: '../../assets/imgs/menu-title.jpg', nome: 'Teste - 2', preco: 200, ativo: true },
      { id: 3, foto: '../../assets/imgs/menu-title.jpg', nome: 'Teste - 3', preco: 300, ativo: true },
      { id: 4, foto: '../../assets/imgs/menu-title.jpg', nome: 'Teste - 4', preco: 400, ativo: true }
    ];
  }

  confirmaPedido(item: itemEstoque) {
    this.navCtrl.push(PedidoPage.name, { itemSelecionado: item });
  }
}
