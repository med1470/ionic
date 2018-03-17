import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JuinPage} from "../juin/juin";
import {AvrilPage} from "../avril/avril";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the MayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-may',
  templateUrl: 'may.html',
})
export class MayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MayPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(JuinPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(AvrilPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
