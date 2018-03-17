import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PoirePage} from "../poire/poire";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the FruitLegumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fruit-legume',
  templateUrl: 'fruit-legume.html',
})
export class FruitLegumePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FruitLegumePage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(PoirePage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(AccuielPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
