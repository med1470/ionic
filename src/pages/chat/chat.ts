import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GrenouilPage} from "../grenouil/grenouil";
import {ChienPage} from "../chien/chien";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(GrenouilPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(ChienPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
