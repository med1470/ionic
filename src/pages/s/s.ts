import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TPage} from "../t/t";
import {RPage} from "../r/r";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the SPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-s',
  templateUrl: 's.html',
})
export class SPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(TPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(RPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
