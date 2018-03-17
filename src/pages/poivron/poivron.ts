import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CarottePage} from "../carotte/carotte";
import {PommetPage} from "../pommet/pommet";
import {AccuielPage} from "../accuiel/accuiel";

/**
 * Generated class for the PoivronPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poivron',
  templateUrl: 'poivron.html',
})
export class PoivronPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoivronPage');
  }
  ouvrirsuivantpage(){
    this.navCtrl.push(PommetPage);}
  ouvrirprecedentpage(){
    this.navCtrl.push(CarottePage);
  }
  ouvrirmenupage(){
    this.navCtrl.push(AccuielPage);
  }
}
