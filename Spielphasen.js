#pragma strict

//bli

function Start () {

}

function Update(){
  

	
if (G.SpielLaueft==true) {         	
	  if (G.letztePhaseAbgeschlossen==true) {
	  
	      if (G.Phase=="K1") {G.Phase="AnnahmeWartend";}
	      if (G.Phase=="AnnahmeWartend") 	  {G.Phase="Annahme";}
	      if (G.Phase=="Annahme") 		  {G.Phase="Zuspiel";}
	      if (G.Phase=="Zuspiel") 	  	  {G.Phase="Angriff";}
	      if (G.Phase=="ErfolgreicherBlock") 	  {G.Phase="Angriffssicherung";}
	      if (G.Phase=="NichtErfolgreicherBlock"){G.Phase="UebergangZumK2";}
	      if (G.Phase=="UebergangZumK2")	  {G.Phase="Blockvorbereitung";}
	      if (G.Phase=="Blockvorbereitung")	  {G.Phase="Blockhandlung";}
	      if (G.Phase=="Blockhandlung")	  {G.Phase="Feldabwehr";}
	      
	      G.letztePhaseAbgeschlossen=false;
	 }
        
        }
	else {
	   if (G.letztenSpielzugGewonnen==true){G.aktSpielphase="K2";}else {G.aktSpielphase="K1";}   
	  
        }
	  
}


