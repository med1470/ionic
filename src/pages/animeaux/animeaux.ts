import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatPage} from "../chat/chat";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the AnimeauxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animeaux',
  templateUrl: 'animeaux.html',
})
export class AnimeauxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimeauxPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(ChatPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(AccuielPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
