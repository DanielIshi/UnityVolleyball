#pragma strict

static var Ball : GameObject;

static var SpielLaueft = false;
static var letztePhaseAbgeschlossen = false;
static var letztenSpielzugGewonnen = false;
static var FeldabwehrErfolgreich = false;
static var AngriffssicherungErfolgreich = false;
static var AngriffErfolgreich = false;

static var Phase = "";
static var aktSpielphase="";
static var naechstePhase=""; 

static var Spieler = new Array ();  
static var Gegner = new Array (); 
static var aktSpieler=1;

static var antizipierter_Sektor="vorne_oben_li";


static var kurz_nach_links  = false;
static var mittel_nach_links = false;
static var lange_nach_links = false; 
static var kurz_nach_rechts = false;
static var lange_nach_rechts = false;
static var kurz_nach_unten = false;
static var mittel_nach_unten = false;
static var lange_nach_unten = false;
static var kurz_nach_oben = false;
static var mittel_nach_oben = false;
static var lange_nach_oben = false;

static function PunkteErhoehen(){
}