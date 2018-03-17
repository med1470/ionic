import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JeudiPage} from "../jeudi/jeudi";
import {MardiPage} from "../mardi/mardi";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the MercrediPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mercredi',
  templateUrl: 'mercredi.html',
})
export class MercrediPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MercrediPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(JeudiPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(MardiPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
