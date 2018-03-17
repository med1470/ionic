import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AoutPage} from "../aout/aout";
import {JuinPage} from "../juin/juin";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the JuilletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juillet',
  templateUrl: 'juillet.html',
})
export class JuilletPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuilletPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(AoutPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(JuinPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
