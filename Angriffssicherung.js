function Angriffssicherung(){
  
	if (G.AngriffssicherungErfolgreich==true) {
          G.naechstePhase="Zuspiel";  
       }
	else 
	{ 
	   G.SpielLaueft=false;
	   G.PunkteErhoehen();
	   G.naechstePhase="AnnahmeWartend";
  }

}


