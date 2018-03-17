import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MayPage} from "../may/may";
import {MarsPage} from "../mars/mars";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the AvrilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avril',
  templateUrl: 'avril.html',
})
export class AvrilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvrilPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(MayPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(MarsPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
