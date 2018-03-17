import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AvrilPage} from "../avril/avril";
import {FevrierPage} from "../fevrier/fevrier";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the MarsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mars',
  templateUrl: 'mars.html',
})
export class MarsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarsPage');
  }
  ouvrirsuivantpage() {
    this.navCtrl.push(AvrilPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(FevrierPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
