import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VendrediPage} from "../vendredi/vendredi";
import {MercrediPage} from "../mercredi/mercredi";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the JeudiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jeudi',
  templateUrl: 'jeudi.html',
})
export class JeudiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JeudiPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(VendrediPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(MercrediPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
