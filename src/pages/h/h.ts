import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IPage} from "../i/i";
import {GPage} from "../g/g";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the HPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-h',
  templateUrl: 'h.html',
})
export class HPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(IPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(GPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
