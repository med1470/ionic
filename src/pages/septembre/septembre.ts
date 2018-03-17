import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OctobrePage} from "../octobre/octobre";
import {AoutPage} from "../aout/aout";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the SeptembrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-septembre',
  templateUrl: 'septembre.html',
})
export class SeptembrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeptembrePage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(OctobrePage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(AoutPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
