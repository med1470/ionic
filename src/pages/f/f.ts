import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GPage} from "../g/g";
import {AccuielPage} from "../accuiel/accuiel";
import {EPage} from "../e/e";

/**
 * Generated class for the FPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-f',
  templateUrl: 'f.html',
})
export class FPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(GPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(EPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
