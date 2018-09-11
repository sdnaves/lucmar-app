import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListaClientesPage } from '../pages/lista-clientes/lista-clientes';
import { ListaFornecedoresPage } from '../pages/lista-fornecedores/lista-fornecedores';
import { ListaPedidosPage } from '../pages/lista-pedidos/lista-pedidos';
import { CadastroPedidosPage } from '../pages/cadastro-pedidos/cadastro-pedidos';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  selector: 'myapp',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon?: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Novo Pedido', component: CadastroPedidosPage.name, icon: 'paper' },
      { title: 'Pedidos', component: ListaPedidosPage.name, icon: 'list-box' },
      { title: 'Clientes', component: ListaClientesPage.name, icon: 'people' },
      { title: 'Fornecedores', component: ListaFornecedoresPage.name, icon: 'briefcase' },
      { title: 'Configurações', component: SettingsPage.name, icon: 'settings' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#0f7de1')

      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
