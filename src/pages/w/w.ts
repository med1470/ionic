import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {XPage} from "../x/x";
import {VPage} from "../v/v";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the WPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-w',
  templateUrl: 'w.html',
})
export class WPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(XPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(VPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
