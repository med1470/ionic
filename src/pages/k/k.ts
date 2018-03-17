import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LPage} from "../l/l";
import {JPage} from "../j/j";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the KPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-k',
  templateUrl: 'k.html',
})
export class KPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(LPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(JPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
