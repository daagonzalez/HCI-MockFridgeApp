import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';

@Component({
  selector: 'recipes-edit',
  templateUrl: 'recipes-edit.html'
})
export class RecipesEditPage {
  selectedItem: {index: any, name: string, ingredients: Array<{name: string, amount: any, unit: string}>};
  recipesD: any;
  recipesL: any;
  name: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dialogs: Dialogs) {
    this.selectedItem = navParams.get('selectedItem');
    this.recipesD = navParams.get("recipesD");
    this.recipesL = navParams.get("recipesL");
    this.name = [];
  }

  itemTapped(event, item) {
  }

  goBack() {
    this.navCtrl.pop();
  }

  saveChanges() {    
    this.recipesD.selectedItem = this.selectedItem;
    this.recipesL.items[this.selectedItem.index] = this.selectedItem;
    this.dialogs.alert("Se ha guardado el cambio correctamente","Cambio Guardado","Aceptar");
    this.navCtrl.pop();
  }
}
