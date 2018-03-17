import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DPage} from "../d/d";
import {FPage} from "../f/f";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the EPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-e',
  templateUrl: 'e.html',
})
export class EPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(FPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(DPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
