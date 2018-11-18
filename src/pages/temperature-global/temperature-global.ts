import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TemperatureSectionPage } from '../temperature-section/temperature-section';
import { Dialogs } from '@ionic-native/dialogs';

@Component({
  selector: 'temperature-global',
  templateUrl: 'temperature-global.html'
})
export class TemperaturePage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  temperatureG: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dialogs: Dialogs) {
    if (localStorage.getItem("tempG") == null) {
      this.temperatureG = 3;
    }
    else {
      this.temperatureG = parseInt(localStorage.getItem("tempG"));
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(TemperaturePage, {
      item: item
    });
  }

  goBack() {
    this.navCtrl.pop();
  };

  toTempSection(itemSelected) {
    this.navCtrl.push(TemperatureSectionPage,{
      item: itemSelected
    });
  }

  reduceTemp() {
    this.temperatureG--;
  }

  increaseTemp() {
    this.temperatureG++;
  }

  saveTemp() {
    localStorage.setItem("tempG",this.temperatureG);
    this.dialogs.alert("Se ha guardado el cambio correctamente","Cambio Guardado","Aceptar");
    this.navCtrl.pop();
  }
}
