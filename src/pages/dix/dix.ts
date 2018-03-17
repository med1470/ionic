import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccuielPage} from "../accuiel/accuiel";
import {NeufPage} from "../neuf/neuf";

/**
 * Generated class for the DixPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dix',
  templateUrl: 'dix.html',
})
export class DixPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DixPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(AccuielPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(NeufPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
