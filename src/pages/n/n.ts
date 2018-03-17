import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MPage} from "../m/m";
import {OPage} from "../o/o";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the NPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-n',
  templateUrl: 'n.html',
})
export class NPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(OPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(MPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
