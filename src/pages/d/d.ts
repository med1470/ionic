import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EPage} from "../e/e";
import {AccuielPage} from "../accuiel/accuiel";
import {CPage} from "../c/c";

/**
 * Generated class for the DPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-d',
  templateUrl: 'd.html',
})
export class DPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DPage');
  }
  ouvrirepage(){
    this.navCtrl.push(EPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(CPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
