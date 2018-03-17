import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TomatePage} from "../tomate/tomate";
import {PoivronPage} from "../poivron/poivron";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the CarottePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carotte',
  templateUrl: 'carotte.html',
})
export class CarottePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarottePage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(PoivronPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(TomatePage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }

}
