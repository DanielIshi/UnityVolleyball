var camera1 : Camera;
var camera2 : Camera;

var GesteuerterSpieler : GameObject;


var Spieler = new Array ();
var aktSpieler=1;  


function Start () {
  camera1.enabled = true;
	camera2.enabled = false;
  
  Spieler.push(GameObject.Find("Spieler1"));
  Spieler.push(GameObject.Find("Spieler2"));
  Spieler.push(GameObject.Find("Spieler3"));
  Spieler.push(GameObject.Find("Spieler4"));
  Spieler.push(GameObject.Find("Spieler5"));
  Spieler.push(GameObject.Find("Spieler6"));

}

   


function WechsleSpieler (){      
      aktSpieler+=1;
}



function Update () {   
  if(Input.GetKeyDown("1")){  camera1.enabled = true; 	camera2.enabled = false; }
  if(Input.GetKeyDown("2")){ 	camera1.enabled = false; 	camera2.enabled = true;  }
  if(Input.GetKeyDown("return")){ 	WechsleSpieler ();  }
  if(Input.GetKeyDown("space")){ 	Spieler[aktSpieler-1].animation.Play("Stemmschritt");  }
  
  if (G.SpielLaueft==true) {
	if (G.letztePhaseAbgeschlossen==true) {

		if (G.Phase=="AnnahmeWartend") {}
		if (G.Phase=="Annahme") {}
		if (G.Phase=="Zuspiel") {}
		if (G.Phase=="Angriff") {}
		if (G.Phase=="Angriffssicherung") {}
		if (G.Phase=="UebergangZumK2"){}
		if (G.Phase=="Blockvorbereitung") {}
		if (G.Phase=="Blockhandlung") {}
		if (G.Phase=="Feldabwehr") {}

		G.letztePhaseAbgeschlossen=false;
	}
        
    }
else {
if (
	G.letztenSpielzugGewonnen==true){G.aktSpielphase="K2";}else {G.aktSpielphase="K1";}

        }
  
  
  
  
}



function AngriffTasten(){
	if(Input.GetKeyDown("space"))  		{ 	StemmschrittBeginnen ();  }
	if(Input.GetKeyDown("return")) 		{ 	Schlag ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	Finte ();  }
	if(Input.GetKeyDown("backspace")) 	{ 	Lobschlag ();  }
}
function AnnahmeTasten(){
	if(Input.GetKeyDown("space"))  		{ 	AnnahmeImOberenZuspiel ();  }
	if(Input.GetKeyDown("return")) 		{ 	Baggern ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	Rutschbagger ();  }	
	
}
function BlockTasten(){
	if(Input.GetKeyDown("space"))  		{ 	Blockabsprung ();  }
	if(Input.GetKeyDown("return")) 		{ 	AktivBlocken ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	PassivBlocken ();  }
}
function AufschlagTasten() {
	if(Input.GetKeyDown("left alt")) 	{ 	AufschlagArtUmschalten ();  }
	if(Input.GetKeyDown("space"))  		{ 	Anwurf ();  }
	if(Input.GetKeyDown("return")) 		{ 	HarterAufSchlag ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	DriveAufschlag ();  }
}
function ZuspielTasten(){
	if(Input.GetKeyDown("left alt")) 	{ 	ErstesTempoZuspiel ();  }
	if(Input.GetKeyDown("space"))  		{ 	ZweitesTempoZuspiel ();  }
	if(Input.GetKeyDown("return")) 		{ 	DrittesTempoZuspiel  ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	Hinterfeldpass ();  }
}
