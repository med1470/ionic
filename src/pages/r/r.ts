import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SPage} from "../s/s";
import {QPage} from "../q/q";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the RPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-r',
  templateUrl: 'r.html',
})
export class RPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(SPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(QPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
