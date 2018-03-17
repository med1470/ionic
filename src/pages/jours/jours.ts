import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MardiPage} from "../mardi/mardi";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the JoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jours',
  templateUrl: 'jours.html',
})
export class JoursPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoursPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(MardiPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(AccuielPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
