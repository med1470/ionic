import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AnanasPage} from "../ananas/ananas";
import {FraisePage} from "../fraise/fraise";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the PoirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poire',
  templateUrl: 'poire.html',
})
export class PoirePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoirePage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(AnanasPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(FraisePage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
