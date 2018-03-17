import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatPage} from "../chat/chat";
import {LapinPage} from "../lapin/lapin";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the GrenouilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grenouil',
  templateUrl: 'grenouil.html',
})
export class GrenouilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrenouilPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(LapinPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(ChatPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
