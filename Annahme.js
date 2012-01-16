function Angriff(){
//blabla
  
if (G.AnnahmeErfolgreich==true) {
          G.naechstePhase="Zuspiel";
       }
else
{
G.SpielLaueft=false;
G.PunkteErhoehen();
G.naechstePhase="AnnahmeWartend";
  }

}