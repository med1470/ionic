import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccuielPage} from "../accuiel/accuiel";
import {NPage} from "../n/n";
import {PPage} from "../p/p";

/**
 * Generated class for the OPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-o',
  templateUrl: 'o.html',
})
export class OPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(PPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(NPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
