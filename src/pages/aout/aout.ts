import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SeptembrePage} from "../septembre/septembre";
import {JuilletPage} from "../juillet/juillet";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the AoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aout',
  templateUrl: 'aout.html',
})
export class AoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AoutPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(SeptembrePage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(JuilletPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
