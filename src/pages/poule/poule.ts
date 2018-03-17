import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AbeillePage} from "../abeille/abeille";
import {OiseauPage} from "../oiseau/oiseau";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the PoulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poule',
  templateUrl: 'poule.html',
})
export class PoulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoulePage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(AbeillePage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(OiseauPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
