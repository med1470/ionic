import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccuielPage} from "../accuiel/accuiel";
import {PommetPage} from "../pommet/pommet";

/**
 * Generated class for the RadisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-radis',
  templateUrl: 'radis.html',
})
export class RadisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadisPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(AccuielPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(PommetPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
