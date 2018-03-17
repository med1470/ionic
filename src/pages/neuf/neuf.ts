import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DixPage} from "../dix/dix";
import {HuitPage} from "../huit/huit";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the NeufPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-neuf',
  templateUrl: 'neuf.html',
})
export class NeufPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NeufPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(DixPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(HuitPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
