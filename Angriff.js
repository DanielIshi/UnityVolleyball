function Angriff(){
  
	if (G.AngriffErfolgreich==true) {
          G.naechstePhase="Zuspiel";  
       }
	else 
	{ 
	   G.SpielLaueft=false;
	   G.PunkteErhoehen();
	   G.naechstePhase="AnnahmeWartend";
  }

}







