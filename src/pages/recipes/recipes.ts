import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipesHuevosPage } from '../recipes-huevosrancheros/recipes-huevosrancheros';
import { RecipesNewPage } from '../recipes-new/recipes-new';

@Component({
  selector: 'recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {
  selectedItem: any;
  recipes: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recipes = ["Huevos Rancheros",
      "Gallo Pinto",
      "Filet Mignon",
      "Pasta Carbonara"];
  }

  itemTapped(event, item) {
    if (item == "Huevos Rancheros") {
      this.navCtrl.push(RecipesHuevosPage);
    }
  }

  goBack() {
    this.navCtrl.pop();
  }

  toNew() {
    this.navCtrl.push(RecipesNewPage);
  }
}
