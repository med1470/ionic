import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LPage} from "../l/l";
import {NPage} from "../n/n";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the MPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-m',
  templateUrl: 'm.html',
})
export class MPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(NPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(LPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);

}}
