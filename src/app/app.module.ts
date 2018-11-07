import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FilterPage } from '../pages/filter/filter';
import { InventoryPage } from '../pages/inventory/inventory';
import { OrderByPage } from '../pages/orderby/orderby';
import { RecipesPage } from '../pages/recipes/recipes';
import { RecipesEditPage } from '../pages/recipes-edit/recipes-edit';
import { RecipesHuevosPage } from '../pages/recipes-huevosrancheros/recipes-huevosrancheros';
import { TemperaturePage } from '../pages/temperature-global/temperature-global';
import { TemperatureSectionPage } from '../pages/temperature-section/temperature-section';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilterPage,
    InventoryPage,
    OrderByPage,
    RecipesPage,
    RecipesEditPage,
    RecipesHuevosPage,
    TemperaturePage,
    TemperatureSectionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilterPage,
    InventoryPage,
    OrderByPage,
    RecipesPage,
    RecipesEditPage,
    RecipesHuevosPage,
    TemperaturePage,
    TemperatureSectionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
