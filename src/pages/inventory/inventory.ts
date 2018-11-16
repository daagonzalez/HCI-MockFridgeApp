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
      unit: "grs",
      currentAmount: 150,
      usualAmount: 200,
      visible: true
    });
    this.items.push({
      index: 1,
      product: "Cebolla",
      unit: "grs",
      currentAmount: 50,
      usualAmount: 40,
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
    this.items.push({
      index: 4,
      product: "Huevos",
      unit: "unid",
      currentAmount: 12,
      usualAmount: 12,
      visible: true
    });
    this.items.push({
      index: 5,
      product: "Chile Dulce",
      unit: "grs",
      currentAmount: 0,
      usualAmount: 150,
      visible: true
    });
    this.items.push({
      index: 6,
      product: "Filet Mignon",
      unit: "unid",
      currentAmount: 2,
      usualAmount: 2,
      visible: true
    });
    this.items.push({
      index: 7,
      product: "Mantequilla",
      unit: "cds",
      currentAmount: 20,
      usualAmount: 20,
      visible: true
    });
    this.items.push({
      index: 8,
      product: "Brandy",
      unit: "cds",
      currentAmount: 80,
      usualAmount: 100,
      visible: true
    });
    this.items.push({
      index: 9,
      product: "Crema Dulce",
      unit: "taz",
      currentAmount: 0.5,
      usualAmount: 4,
      visible: true
    });
    this.items.push({
      index: 10,
      product: "Tocino",
      unit: "grs",
      currentAmount: 180,
      usualAmount: 200,
      visible: true
    });
    this.items.push({
      index: 11,
      product: "Parmigiano",
      unit: "taz",
      currentAmount: 1,
      usualAmount: 1,
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
