import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DecembrePage} from "../decembre/decembre";
import {OctobrePage} from "../octobre/octobre";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the NovembrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novembre',
  templateUrl: 'novembre.html',
})
export class NovembrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovembrePage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(DecembrePage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(OctobrePage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
