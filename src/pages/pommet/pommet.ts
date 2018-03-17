import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PoivronPage} from "../poivron/poivron";
import {RadisPage} from "../radis/radis";
import {AccuielPage} from "../accuiel/accuiel";

/**
 *
 * Generated class for the PommetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pommet',
  templateUrl: 'pommet.html',
})
export class PommetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PommetPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(RadisPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(PoivronPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
