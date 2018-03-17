import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SPage} from "../s/s";
import {UPage} from "../u/u";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the TPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t',
  templateUrl: 't.html',
})
export class TPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(UPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(SPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
