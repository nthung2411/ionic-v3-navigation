import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ItemPage } from '../item/item';
import { ListPage } from '../list/list';


@NgModule({
  declarations: [
    HomePage,
    ListPage,
    ItemPage
  ],
  entryComponents:[
    HomePage,
    ListPage,
    ItemPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports:[
    ListPage,
    ItemPage
  ]
})
export class HomePageModule {}
