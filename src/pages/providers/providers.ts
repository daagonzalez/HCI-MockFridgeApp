import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipesOrderPage } from '../recipes-order/recipes-order';
import { Dialogs } from '@ionic-native/dialogs';

@Component({
  selector: 'providers',
  templateUrl: 'providers.html'
})
export class ProvidersPage {
  providers: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dialogs: Dialogs) {

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
    this.dialogs.alert("Aquí se pueden editar los datos sobre el Proveedor " + item,"No Implementado","Aceptar");
    // this.navCtrl.push(RecipesOrderPage, {
    //   item: item
    // });
  }

  goBack() {
    this.navCtrl.pop();
  }

  newProvider() {
    this.dialogs.alert("Aquí se puede agregar un nuevo Proveedor","No Implementado","Aceptar");
  }
  
}
