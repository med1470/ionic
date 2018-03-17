import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TPage} from "../t/t";
import {VPage} from "../v/v";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the UPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-u',
  templateUrl: 'u.html',
})
export class UPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(VPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(TPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
