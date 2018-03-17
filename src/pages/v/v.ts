import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WPage} from "../w/w";
import {UPage} from "../u/u";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the VPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v',
  templateUrl: 'v.html',
})
export class VPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(WPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(UPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
