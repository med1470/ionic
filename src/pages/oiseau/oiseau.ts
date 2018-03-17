import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PoulePage} from "../poule/poule";
import {TortuePage} from "../tortue/tortue";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the OiseauPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oiseau',
  templateUrl: 'oiseau.html',
})
export class OiseauPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OiseauPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(PoulePage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(TortuePage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
