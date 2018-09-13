import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaPedidosPage } from '../lista-pedidos/lista-pedidos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  listaPedidos() {
    this.navCtrl.push(ListaPedidosPage.name);
  }
}
