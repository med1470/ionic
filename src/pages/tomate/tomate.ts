import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CarottePage} from "../carotte/carotte";
import {RaisinPage} from "../raisin/raisin";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the TomatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tomate',
  templateUrl: 'tomate.html',
})
export class TomatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TomatePage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(CarottePage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(RaisinPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
