import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {YPage} from "../y/y";
import {WPage} from "../w/w";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the XPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-x',
  templateUrl: 'x.html',
})
export class XPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(YPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(WPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
