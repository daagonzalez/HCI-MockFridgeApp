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
  items: Array<{index: any, name: string, ingredients: Array<{name: string, amount: any, unit: string}>}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recipes = ["Huevos Rancheros",
      "Gallo Pinto",
      "Filet Mignon",
      "Pasta Carbonara"];
      this.items = [];
      this.items.push({
        index: 0,
        name: "Huevos Rancheros",
        ingredients: [{
          name: "Tomate",
          amount: 250,
          unit: "grs"
        },{
          name: "Huevos",
          amount: 4,
          unit: "unid"
        },{
          name: "Chile Dulce",
          amount: 50,
          unit: "grs"
        }]
      });
      this.items.push({
        index: 1,
        name: "Gallo Pinto",
        ingredients: [{
          name: "Arroz",
          amount: 200,
          unit: "grs"
        },{
          name: "Frijoles",
          amount: 100,
          unit: "grs"
        },{
          name: "Cebolla",
          amount: 50,
          unit: "grs"
        },{
          name: "Salsa Lizano",
          amount: 2,
          unit: "cds"
        }]
      });
      this.items.push({
        index: 2,
        name: "Filet Mignon",
        ingredients: [{
          name: "Filtet Mignon",
          amount: 2,
          unit: "unid"
        },{
          name: "Mantequilla",
          amount: 1,
          unit: "cds"
        },{
          name: "Brandy",
          amount: 1.5,
          unit: "cds"
        },{
          name: "Mostaza",
          amount: 2,
          unit: "cds"
        },{
          name: "Crema Dulce",
          amount: 0.75,
          unit: "taz"
        }]
      });
      this.items.push({
        index: 3,
        name: "Pasta Carbonara",
        ingredients: [{
          name: "Spaghetti",
          amount: 0.45,
          unit: "Kg"
        },{
          name: "Huevos",
          amount: 2,
          unit: "cds"
        },{
          name: "Tocino",
          amount: 120,
          unit: "grs"
        },{
          name: "Parmigiano",
          amount: 1,
          unit: "taz"
        }]
      });
  }

  itemTapped(event, item) {
    this.navCtrl.push(RecipesHuevosPage, {
      selectedItem: this.items[item],
      recipesL: this
    });
  }

  goBack() {
    this.navCtrl.pop();
  }

  toNew() {
    this.navCtrl.push(RecipesNewPage);
  }
}
