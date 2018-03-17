import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccuielPage} from '../pages/accuiel/accuiel';
import { AlphabetPage} from '../pages/alphabet/alphabet';
import {NombrePage} from "../pages/nombre/nombre";
import {EcrirealphabetPage} from "../pages/ecrirealphabet/ecrirealphabet";
import {EcrirenombrePage} from "../pages/ecrirenombre/ecrirenombre";
import {FruitLegumePage} from "../pages/fruit-legume/fruit-legume";
import {AnimeauxPage} from "../pages/animeaux/animeaux";
import {JoursPage} from "../pages/jours/jours";
import {MoisPage} from "../pages/mois/mois";
import {BPage} from "../pages/b/b";
import  {CPage} from "../pages/c/c";
import {DPage} from "../pages/d/d";
import {EPage} from "../pages/e/e";
import {FPage} from "../pages/f/f";
import {GPage} from "../pages/g/g";
import {HPage} from "../pages/h/h";
import {IPage} from "../pages/i/i";
import {KPage} from "../pages/k/k";
import {LPage} from "../pages/l/l";
import {MPage} from "../pages/m/m";
import {NPage} from "../pages/n/n";
import {JPage} from "../pages/j/j";
import {OPage} from "../pages/o/o";
import {PPage} from "../pages/p/p";
import {QPage} from "../pages/q/q";
import {RPage} from "../pages/r/r";
import {SPage} from "../pages/s/s";
import {TPage} from "../pages/t/t";
import {UPage} from "../pages/u/u";
import {VPage} from "../pages/v/v";
import {WPage} from "../pages/w/w";
import {XPage} from "../pages/x/x";
import {YPage} from "../pages/y/y";
import {ZPage} from "../pages/z/z";
import {UnPage} from "../pages/un/un";
import {DeuxPage} from "../pages/deux/deux";
import {TroisPage} from "../pages/trois/trois";
import {QuatrPage} from "../pages/quatr/quatr";
import {CinqPage} from "../pages/cinq/cinq";
import {SixPage} from "../pages/six/six";
import {SeptPage} from "../pages/sept/sept";
import {HuitPage} from "../pages/huit/huit";
import {NeufPage} from "../pages/neuf/neuf";
import {DixPage} from "../pages/dix/dix";
import {MardiPage} from "../pages/mardi/mardi";
import {MercrediPage} from "../pages/mercredi/mercredi";
import {JeudiPage} from "../pages/jeudi/jeudi";
import {VendrediPage} from "../pages/vendredi/vendredi";
import {SamediPage} from "../pages/samedi/samedi";
import {DimanchePage} from "../pages/dimanche/dimanche";
import {FevrierPage} from "../pages/fevrier/fevrier";
import {MarsPage} from "../pages/mars/mars";
import {AvrilPage} from "../pages/avril/avril";
import {MayPage} from "../pages/may/may";
import {JuinPage} from "../pages/juin/juin";
import {JuilletPage} from "../pages/juillet/juillet";
import {AoutPage} from "../pages/aout/aout";
import {SeptembrePage} from "../pages/septembre/septembre";
import {OctobrePage} from "../pages/octobre/octobre";
import {NovembrePage} from "../pages/novembre/novembre";
import {DecembrePage} from "../pages/decembre/decembre";
import {ChienPage} from "../pages/chien/chien";
import {ChatPage} from "../pages/chat/chat";
import {GrenouilPage} from "../pages/grenouil/grenouil";
import {LapinPage} from "../pages/lapin/lapin";
import {TortuePage} from "../pages/tortue/tortue";
import {OiseauPage} from "../pages/oiseau/oiseau";
import {PoulePage} from "../pages/poule/poule";
import {AbeillePage} from "../pages/abeille/abeille";
import {LoupPage} from "../pages/loup/loup";
import {FraisePage} from "../pages/fraise/fraise";
import {PoirePage} from "../pages/poire/poire";
import {AnanasPage} from "../pages/ananas/ananas";
import {BananePage} from "../pages/banane/banane";
import {CericesPage} from "../pages/cerices/cerices";
import {PommePage} from "../pages/pomme/pomme";
import {PastequePage} from "../pages/pasteque/pasteque";
import {RaisinPage} from "../pages/raisin/raisin";
import {TomatePage} from "../pages/tomate/tomate";
import {CarottePage} from "../pages/carotte/carotte";
import {PommetPage} from "../pages/pommet/pommet";
import {RadisPage} from "../pages/radis/radis";
import {PoivronPage} from "../pages/poivron/poivron";
@NgModule({
  declarations: [
    MyApp, HomePage, AccuielPage, AlphabetPage, NombrePage,
    EcrirealphabetPage, EcrirenombrePage, MoisPage, JoursPage, FruitLegumePage,
    AnimeauxPage, CPage, BPage, DPage, EPage, FPage, GPage,
    HPage, IPage, KPage, LPage, MPage, NPage, JPage, OPage, PPage, QPage,
    RPage, SPage, TPage, UPage, VPage, WPage, XPage,
    YPage, ZPage, UnPage, DeuxPage, TroisPage, QuatrPage, CinqPage, SixPage, SeptPage, HuitPage, NeufPage,
    DixPage,MardiPage,MercrediPage,JeudiPage,VendrediPage,SamediPage,DimanchePage,FevrierPage,MarsPage,AvrilPage,
    MayPage,JuinPage,JuilletPage,AoutPage,SeptembrePage,OctobrePage,NovembrePage,DecembrePage,ChienPage,ChatPage,
    GrenouilPage,LapinPage,TortuePage,OiseauPage,PoulePage,AbeillePage,LoupPage ,FraisePage,PoirePage,AnanasPage,
    BananePage,CericesPage,PommePage,PastequePage,RaisinPage,TomatePage,CarottePage,PommetPage,
    RadisPage,PoivronPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccuielPage,
    AlphabetPage,
    NombrePage,
    EcrirealphabetPage,
    EcrirenombrePage   ,
    MoisPage,
    JoursPage,
    FruitLegumePage,
    AnimeauxPage,
    BPage,
    CPage,
    DPage,
    EPage,
    FPage,
    GPage,
    HPage,
    IPage,
    KPage,
    LPage,
    MPage,
    NPage,
    JPage,
    OPage,
    PPage,
    QPage,
    RPage,
    SPage,
    TPage,
    UPage,
    VPage,
    WPage,
    XPage,
    YPage,
    ZPage,
    UnPage,
    DeuxPage,
    TroisPage,
    QuatrPage,
    CinqPage,
    SixPage,
    SeptPage,
    HuitPage,
    NeufPage,
    DixPage,
    MardiPage,MercrediPage,JeudiPage,VendrediPage,SamediPage,DimanchePage,FevrierPage,MarsPage,AvrilPage,
    MayPage,JuinPage,JuilletPage,AoutPage,SeptembrePage,OctobrePage,NovembrePage,DecembrePage,ChienPage,ChatPage,
    GrenouilPage,LapinPage,TortuePage,OiseauPage,PoulePage,AbeillePage,LoupPage,
    FraisePage,PoirePage,AnanasPage,BananePage,CericesPage,PommePage,PastequePage,RaisinPage,TomatePage,CarottePage,PommetPage
    ,RadisPage,PoivronPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
