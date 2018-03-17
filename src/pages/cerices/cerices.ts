import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PommePage} from "../pomme/pomme";
import{BananePage} from "../banane/banane";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the CericesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cerices',
  templateUrl: 'cerices.html',
})
export class CericesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CericesPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(PommePage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(BananePage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
