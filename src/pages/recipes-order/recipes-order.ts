import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'recipes-order',
  templateUrl: 'recipes-order.html'
})
export class RecipesOrderPage {
  selectedItem: any;
  missingIngredients: Array<{name: string, amountMissing: any, unit: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.missingIngredients = navParams.get('missingIngredients');
    this.selectedItem = navParams.get('item');
  }

  goBack() {
    this.navCtrl.pop();
  }

  toHome() {
    this.navCtrl.goToRoot(null);
  }
}
