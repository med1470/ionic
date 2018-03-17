import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CericesPage} from "../cerices/cerices";
import {AnanasPage} from "../ananas/ananas";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the BananePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-banane',
  templateUrl: 'banane.html',
})
export class BananePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BananePage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(CericesPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(AnanasPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
