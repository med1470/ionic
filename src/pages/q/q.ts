import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RPage} from "../r/r";
import {PPage} from "../p/p";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the QPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-q',
  templateUrl: 'q.html',
})
export class QPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(RPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(PPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
