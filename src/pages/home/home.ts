import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InventoryPage } from '../inventory/inventory';
import { TemperaturePage } from '../temperature-global/temperature-global';
import { RecipesPage } from '../recipes/recipes';
import { ProvidersPage } from '../providers/providers';
import { Dialogs } from '@ionic-native/dialogs';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dialogs: Dialogs) {
    this.pages = [InventoryPage, TemperaturePage, RecipesPage, ProvidersPage];
    sessionStorage.setItem("index","1");
  }

  toPage(newPageId) {
    this.navCtrl.push(this.pages[newPageId]);
  }

  goBack() {
  };

  toSettings() {
    this.dialogs.alert("Aquí se pueden cambiar opciones de la aplicación","No Implementado","Aceptar");
  }

  toOrders() {
    this.dialogs.alert("Aquí se pueden ver los pedidos realizados","No Implementado","Aceptar");
  }
}
