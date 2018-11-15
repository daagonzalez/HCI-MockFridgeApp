import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InventoryPage } from '../inventory/inventory';
import { TemperaturePage } from '../temperature-global/temperature-global';
import { RecipesPage } from '../recipes/recipes';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [InventoryPage, TemperaturePage, RecipesPage];
    sessionStorage.setItem("index","1");
  }

  toPage(newPageId) {
    this.navCtrl.push(this.pages[newPageId]);
  }

  goBack() {
    window.close();
  };
}
