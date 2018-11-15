import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { OrderByPage } from '../orderby/orderby';

@Component({
  selector: 'inventory',
  templateUrl: 'inventory.html'
})
export class InventoryPage {
  selectedItem: any;
  icons: string[];
  items: Array<{index: any, product: string, unit: string, currentAmount: any, usualAmount: any, visible: boolean}>;
  orderCriteria: string;
  filterCriteria: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.items = [];
    this.items.push({
      index: 0,
      product: "Tomate",
      unit: "Kg",
      currentAmount: 1.0,
      usualAmount: 1.5,
      visible: true
    });
    this.items.push({
      index: 1,
      product: "Cebolla",
      unit: "Kg",
      currentAmount: 0.5,
      usualAmount: 0.4,
      visible: true
    });
    this.items.push({
      index: 2,
      product: "Queso",
      unit: "Kg",
      currentAmount: 0.7,
      usualAmount: 1.5,
      visible: true
    });
    this.items.push({
      index: 3,
      product: "Cebollino",
      unit: "Kg",
      currentAmount: 1.0,
      usualAmount: 1.5,
      visible: true
    });
  }

  setIcon(currentA, usualA) {
    if (currentA == 0) {
      return "alert";
    }
    else if (currentA < usualA) {
      return "warning";
    }
    else if (currentA >= usualA) {
      return "checkmark-circle";
    }
  }

  toFilter() {
    this.navCtrl.push(FilterPage, {
      index: this
    });
  }

  toOrderBy() {
    this.navCtrl.push(OrderByPage, {
      index: this
    });
  }

    goBack() {
      this.navCtrl.pop();
    };
}
