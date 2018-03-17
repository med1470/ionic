import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FPage} from "../f/f";
import {HPage} from "../h/h";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the GPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-g',
  templateUrl: 'g.html',
})
export class GPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(HPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(FPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
