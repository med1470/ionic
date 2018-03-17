import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CericesPage} from "../cerices/cerices";
import {PastequePage} from "../pasteque/pasteque";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the PommePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pomme',
  templateUrl: 'pomme.html',
})
export class PommePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PommePage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(PastequePage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(CericesPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
