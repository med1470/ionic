import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DPage} from "../d/d";
import {BPage} from "../b/b";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the CPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c',
  templateUrl: 'c.html',
})
export class CPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CPage');
  }
  ouvrirdpage(){
    this.navCtrl.push(DPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(BPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }


}
