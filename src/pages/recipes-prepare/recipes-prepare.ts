import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipesProviderPage } from '../recipes-provider/recipes-provider';

@Component({
  selector: 'recipes-prepare',
  templateUrl: 'recipes-prepare.html'
})
export class RecipesPreparePage {
  missingIngredients: Array<{name: string, amountMissing: any, unit: string}>;
  recipe: any;
  items: Array<{index: any, product: string, unit: string, currentAmount: any, usualAmount: any, visible: boolean}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recipe = navParams.get('recipe');
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
    this.checkIngredients();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(RecipesPreparePage, {
      item: item
    });
  }

  checkIngredients() {
    this.missingIngredients = [];
    this.recipe.ingredients.forEach(ingredient => {
      var indexFound = this.items.findIndex(function(element) {
        return element.product == ingredient.name;
      });
      if (-1 != indexFound) {
        var amountInInventory = this.items[indexFound].currentAmount;
        if (ingredient.amount > amountInInventory) {
          this.missingIngredients.push({
            name: this.items[indexFound].product,
            amountMissing: ingredient.amount - amountInInventory,
            unit: ingredient.unit
          });
        }
      }
    });
  }

  goBack() {
    this.navCtrl.pop();
  };

  toProviders() {
    this.navCtrl.push(RecipesProviderPage, {
      missingIngredients: this.missingIngredients
    })
  }
}
