import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlphabetPage} from '../alphabet/alphabet';
import {NombrePage} from "../nombre/nombre";
import {EcrirealphabetPage} from "../ecrirealphabet/ecrirealphabet";
import {EcrirenombrePage} from "../ecrirenombre/ecrirenombre";
import {FruitLegumePage} from "../fruit-legume/fruit-legume";
import {AnimeauxPage} from "../animeaux/animeaux";
import {JoursPage} from "../jours/jours";
import {MoisPage} from "../mois/mois";
import {HomePage} from "../home/home";

/**
 * Generated class for the AccuielPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accuiel',
  templateUrl: 'accuiel.html',
})
export class AccuielPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ouvrirhomepage(){
    this.navCtrl.push(HomePage);
  }
  ouvriralphabetpage(){
    this.navCtrl.push(AlphabetPage);
  }
  ouvrirEcrirealphabetPage(){
    this.navCtrl.push(EcrirealphabetPage);
  }
  ouvrirEcrirenombrePage(){
    this.navCtrl.push(EcrirenombrePage);
  }


  ouvrirnombrepage(){
    this.navCtrl.push(NombrePage);
  }
  ouvrirFruitLegumePage(){
    this.navCtrl.push(FruitLegumePage);
  }
  ouvrirAnimeauxPage(){
    this.navCtrl.push(AnimeauxPage);
  }
  ouvrirJoursPage(){
    this.navCtrl.push(JoursPage);
  }
  ouvrirMoisPage(){
    this.navCtrl.push(MoisPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccuielPage');
  }

}
