import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'filter-search',
  templateUrl: 'filter-search.html'
})
export class FilterSearchPage {
  selectedItem: any;
  filterPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = "";
    this.filterPage = navParams.get("filterPage");
  }

  goBack() {
    this.navCtrl.pop();
  };

  search() {
    this.filterPage.searchFilter = this.selectedItem;
    var items = this.filterPage.filterItems('search', this.filterPage.inventory.items);
    this.filterPage.inventory.items = items;
    this.navCtrl.pop();
    this.navCtrl.pop();
  }
}
