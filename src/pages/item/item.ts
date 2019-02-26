import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';

/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  @ViewChild(Navbar) navBar: Navbar;

  public item = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  ionViewDidLoad() {

    this.item = this.navParams.get('item');

    this.navBar.backButtonClick = () => {
      this.navCtrl.pop({
        animate: true,
        direction: 'back',
        animation: 'ios-transition',
        duration: 1000
      });
    }
  }

}
