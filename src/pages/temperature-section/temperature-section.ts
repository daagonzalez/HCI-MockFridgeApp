import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';

@Component({
  selector: 'temperature-section',
  templateUrl: 'temperature-section.html'
})
export class TemperatureSectionPage {
  selectedItem: any;
  temperatureS: any;
  limitT: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dialogs: Dialogs) {
    this.selectedItem = navParams.get('item');
    if (localStorage.getItem("tempG") == null) {
      this.limitT = 3;
    }
    else {
      this.limitT = parseInt(localStorage.getItem("tempG"));
    }

    if (localStorage.getItem(this.selectedItem+"_Temp") == null) {
      this.temperatureS = this.limitT;
    }
    else {
      this.temperatureS = parseInt(localStorage.getItem(this.selectedItem+"_Temp"));
    }
  }

  goBack() {
    this.navCtrl.pop();
  };

  reduceTemp() {
    if (this.temperatureS-1 >= this.limitT-2) {
      this.temperatureS--;
    }
  }

  increaseTemp() {
    if (this.temperatureS+1 <= this.limitT+2) {
      this.temperatureS++;
    }
  }

  saveTemp() {
    localStorage.setItem((this.selectedItem+"_Temp"),this.temperatureS);
    this.dialogs.alert("Se ha guardado el cambio correctamente","Cambio Guardado","Aceptar");
    this.navCtrl.pop();
  }
}
