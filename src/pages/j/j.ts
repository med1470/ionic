import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IPage} from "../i/i";
import {KPage} from "../k/k";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the JPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-j',
  templateUrl: 'j.html',
})
export class JPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(KPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(IPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
