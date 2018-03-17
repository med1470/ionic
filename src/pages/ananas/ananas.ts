import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PoirePage} from "../poire/poire";
import {BananePage} from "../banane/banane";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the AnanasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ananas',
  templateUrl: 'ananas.html',
})
export class AnanasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnanasPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(BananePage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(PoirePage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
