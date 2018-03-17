import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccuielPage} from "../accuiel/accuiel";
import {SamediPage} from "../samedi/samedi";
import {JeudiPage} from "../jeudi/jeudi";

/**
 * Generated class for the VendrediPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendredi',
  templateUrl: 'vendredi.html',
})
export class VendrediPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendrediPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(SamediPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(JeudiPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
