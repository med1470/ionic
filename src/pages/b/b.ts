import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccuielPage} from "../accuiel/accuiel";
import {CPage} from "../c/c";
import {AlphabetPage} from "../alphabet/alphabet";

/**
 * Generated class for the BPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BPage');
  }
  ouvrircpage(){
    this.navCtrl.push(CPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(AlphabetPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }

}
