import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccuielPage} from "../accuiel/accuiel";
import {SeptembrePage} from "../septembre/septembre";
import {NovembrePage} from "../novembre/novembre";

/**
 * Generated class for the OctobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-octobre',
  templateUrl: 'octobre.html',
})
export class OctobrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OctobrePage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(NovembrePage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(SeptembrePage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
