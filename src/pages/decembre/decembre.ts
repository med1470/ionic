import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccuielPage} from "../accuiel/accuiel";
import {NovembrePage} from "../novembre/novembre";

/**
 * Generated class for the DecembrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decembre',
  templateUrl: 'decembre.html',
})
export class DecembrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DecembrePage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(AccuielPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(NovembrePage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
