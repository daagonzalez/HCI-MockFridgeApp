import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipesEditPage } from '../recipes-edit/recipes-edit';
import { RecipesPreparePage } from '../recipes-prepare/recipes-prepare';

@Component({
  selector: 'recipes-huevosrancheros',
  templateUrl: 'recipes-huevosrancheros.html'
})
export class RecipesHuevosPage {
  selectedItem: {index: any, name: string, ingredients: Array<{name: string, amount: any, unit: string}>};
  recipes: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.selectedItem = navParams.get('selectedItem');
    this.recipes = navParams.get('recipesL');
  }

  goBack() {
    this.navCtrl.pop();
  };

  toEdit() {
    this.navCtrl.push(RecipesEditPage, {
      selectedItem: this.selectedItem,
      recipesD: this,
      recipesL: this.recipes
    });
  }
  
  toPrepare() {
    this.navCtrl.push(RecipesPreparePage, {
      recipe: this.selectedItem
    });
  }
}
