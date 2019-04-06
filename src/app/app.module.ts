import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Config } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { MenuPageModule } from '../pages/menu/menu.module';
import { HomePageModule } from '../pages/home/home.module';
import { SlideUpTransition } from '../transition/slide-up';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    MenuPageModule,
    HomePageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {
  constructor(private config: Config) {
    this.config.setTransition("slide-up", SlideUpTransition);
  }
}
