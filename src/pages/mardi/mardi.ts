import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JoursPage} from "../jours/jours";
import {MercrediPage} from "../mercredi/mercredi";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the MardiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mardi',
  templateUrl: 'mardi.html',
})
export class MardiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MardiPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(MercrediPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(JoursPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
