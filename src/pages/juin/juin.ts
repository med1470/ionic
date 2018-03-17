import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JuilletPage} from "../juillet/juillet";
import {MayPage} from "../may/may";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the JuinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juin',
  templateUrl: 'juin.html',
})
export class JuinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuinPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(JuilletPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(MayPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
