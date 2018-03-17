import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoupPage} from "../loup/loup";
import {PoulePage} from "../poule/poule";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the AbeillePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abeille',
  templateUrl: 'abeille.html',
})
export class AbeillePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbeillePage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(LoupPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(PoulePage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
