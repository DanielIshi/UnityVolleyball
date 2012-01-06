function Feldabwehr(){
  
	if (G.FeldabwehrErfolgreich==true) {
          G.naechstePhase="Zuspiel";  
       }
	else 
	{ 
	   G.SpielLaueft=false;
	   G.PunkteErhoehen();
	   G.naechstePhase="AnnahmeWartend";
  }

}

