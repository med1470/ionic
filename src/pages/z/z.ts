import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccuielPage} from "../accuiel/accuiel";
import {YPage} from "../y/y";

/**
 * Generated class for the ZPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-z',
  templateUrl: 'z.html',
})
export class ZPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(AccuielPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(YPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
