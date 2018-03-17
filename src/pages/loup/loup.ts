import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccuielPage} from "../accuiel/accuiel";
import {AbeillePage} from "../abeille/abeille";

/**
 * Generated class for the LoupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loup',
  templateUrl: 'loup.html',
})
export class LoupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoupPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(AccuielPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(AbeillePage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
