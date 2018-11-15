import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'orderby',
  templateUrl: 'orderby.html'
})
export class OrderByPage {
  inventory: any;
  items: Array<{index: any, product: string, unit: string, currentAmount: any, usualAmount: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.inventory = navParams.get("index");
    this.items = this.inventory.items;
  }

  itemTapped(event, item) {
    this.sortItems(item);
    this.inventory.items = this.items;
    this.navCtrl.pop();
  }

  goBack() {
    this.navCtrl.pop();
  }

  sortItems(filter) {
    var n = this.items.length;
    var swapped = true;
    while(swapped) {
        swapped = false;
        for (var i=1; i<n; i++) {
            if (this.items[i-1][filter] > this.items[i][filter]) {
                var temp = this.items[i-1];
                this.items[i-1] = this.items[i];
                this.items[i] = temp;
                swapped = true;
            }
        }
        n = n - 1;
    }
}
}
