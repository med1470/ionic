import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CinqPage} from "../cinq/cinq";
import {TroisPage} from "../trois/trois";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the QuatrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quatr',
  templateUrl: 'quatr.html',
})
export class QuatrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuatrPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(CinqPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(TroisPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
