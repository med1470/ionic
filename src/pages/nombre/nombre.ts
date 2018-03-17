import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DeuxPage} from "../deux/deux";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the NombrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nombre',
  templateUrl: 'nombre.html',
})
export class NombrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NombrePage');
  }

  ouvrirsuivantpage() {
    this.navCtrl.push(DeuxPage);
  }

  ouvrirprecedentpage() {
    this.navCtrl.push(AccuielPage);
  }

  ouvrirmenupage() {
    this.navCtrl.push(AccuielPage);
  }
}
