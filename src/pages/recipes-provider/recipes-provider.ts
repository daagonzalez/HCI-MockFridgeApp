import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipesOrderPage } from '../recipes-order/recipes-order';

@Component({
  selector: 'recipes-provider',
  templateUrl: 'recipes-provider.html'
})
export class RecipesProviderPage {
  missingIngredients: Array<{name: string, amountMissing: any, unit: string}>;
  providers: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.missingIngredients = navParams.get('missingIngredients');

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
    this.navCtrl.push(RecipesOrderPage, {
      item: item,
      missingIngredients: this.missingIngredients
    });
  }

  goBack() {
    this.navCtrl.pop();
  };

  
}
