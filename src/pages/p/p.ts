import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OPage} from "../o/o";
import {QPage} from "../q/q";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the PPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p',
  templateUrl: 'p.html',
})
export class PPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(QPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(OPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
