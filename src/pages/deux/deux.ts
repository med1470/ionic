import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TroisPage} from "../trois/trois";
import {NombrePage} from "../nombre/nombre";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the DeuxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deux',
  templateUrl: 'deux.html',
})
export class DeuxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeuxPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(TroisPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(NombrePage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
