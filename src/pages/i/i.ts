import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JPage} from "../j/j";
import  {HPage} from "../h/h";
import  {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the IPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-i',
  templateUrl: 'i.html',
})
export class IPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(JPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(HPage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
