import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { itemEstoque } from '../../models/item-estoque';

@Injectable()
export class PedidosServiceProvider {

  estoque: itemEstoque[];

  constructor(public http: HttpClient) {
  }

  public getPedidos(): Promise<itemEstoque[]> {
    if (typeof(this.estoque) === 'undefined') {
      return this.http.get<itemEstoque[]>('../../assets/files/estoque.json')
                      .toPromise().then((res) => {
                        this.estoque = res;
                        return this.estoque;
                      });
    } else {
      return Promise.resolve(this.estoque);
    }
  }

}
