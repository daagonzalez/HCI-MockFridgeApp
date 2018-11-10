import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipesOrderPage } from '../recipes-order/recipes-order';

@Component({
  selector: 'recipes-provider',
  templateUrl: 'recipes-provider.html'
})
export class RecipesProviderPage {
  selectedItem: any;
  providers: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.providers = [];
    this.providers.push({
      title: "Amazon",
      icon: 'create'
    });
    this.providers.push({
      title: "Auto Mercado",
      icon: 'create'
    });
    this.providers.push({
      title: "Walmart",
      icon: 'create'
    });
    this.providers.push({
      title: "Mas x Menos",
      icon: 'create'
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(RecipesOrderPage, {
      item: item
    });
  }

  goBack() {
    this.navCtrl.pop();
  };

  
}
