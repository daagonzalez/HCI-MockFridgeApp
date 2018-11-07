import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FilterPage } from '../pages/filter/filter';
import { InventoryPage } from '../pages/inventory/inventory';
import { OrderByPage } from '../pages/orderby/orderby';
import { RecipesPage } from '../pages/recipes/recipes';
import { RecipesEditPage } from '../pages/recipes-edit/recipes-edit';
import { RecipesHuevosPage } from '../pages/recipes-huevosrancheros/recipes-huevosrancheros';
import { TemperaturePage } from '../pages/temperature-global/temperature-global';
import { TemperatureSectionPage } from '../pages/temperature-section/temperature-section';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Inventario - Filtro', component: FilterPage },
      { title: 'Inventario', component: InventoryPage },
      { title: 'Inventario - Ordenar por', component: OrderByPage },
      { title: 'Recetas', component: RecipesPage },
      { title: 'Recetas - Editar', component: RecipesEditPage },
      { title: 'Recetas - Huevos Rancheros', component: RecipesHuevosPage },
      { title: 'Temperatura Global', component: TemperaturePage },
      { title: 'Temperatura - sección', component: TemperatureSectionPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
