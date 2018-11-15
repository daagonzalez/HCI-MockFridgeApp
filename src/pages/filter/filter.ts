import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InventoryPage } from '../inventory/inventory';

@Component({
  selector: 'filter',
  templateUrl: 'filter.html'
})
export class FilterPage {
  inventory: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inventory = navParams.get("index");
  }

  itemTapped(event, item) {
    var items = this.filterItems(item, this.inventory.items);
    this.inventory.items = items;
    this.navCtrl.pop();
  }

  filterItems(filter, items) {
    if (filter == "spc") {

    }
    else if (filter ==  "missing") {
      items.forEach(item => {
        if (item.currentAmount < item.usualAmount) {
          item.visible = true;
        }
        else {
          item.visible = false;
        }
      });
    }
    else if (filter == "excess") {
      items.forEach(item => {
        if (item.currentAmount > item.usualAmount) {
          item.visible = true;
        }
        else {
          item.visible = false;
        }
      });
    }
    else if (filter == "out") {
      items.forEach(item => {
        if (item.currentAmount == 0) {
          item.visible = true;
        }
        else {
          item.visible = false;
        }
      });
    }
    return items;
  }

  goBack() {
    this.navCtrl.pop();
  };
}
