import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ZPage} from "../z/z";
import {XPage} from "../x/x";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the YPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-y',
  templateUrl: 'y.html',
})
export class YPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(ZPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(XPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
