import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MPage} from "../m/m";
import {KPage} from "../k/k";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the LPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-l',
  templateUrl: 'l.html',
})
export class LPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(MPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(KPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
