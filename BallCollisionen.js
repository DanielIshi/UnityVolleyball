var Ball:GameObject;


function OnCollisionEnter(collision : Collision) {

      if (G.Phase=="Annahme" ) {
            if (other.gameObject.name == "Ball" && antizipierter Sektor=="vorne_oben_li") {
                  G.AnnahmeErfolgreich=true;
                  FuehreBallaufBrett();
                  G.letztePhaseAbgeschlossen=true;
            }
            if (other.gameObject.name == "Ball" && antizipierter Sektor=="vorne_oben_re") {
                  G.AnnahmeErfolgreich=true;
                  FuehreBallaufBrett();
                  G.letztePhaseAbgeschlossen=true;
            }
            if (other.gameObject.name == "Ball" && antizipierter Sektor=="vorne_unten_re") {
                  G.AnnahmeErfolgreich=true;
                  FuehreBallaufBrett();
                  G.letztePhaseAbgeschlossen=true;
            }
            if (other.gameObject.name == "Ball" && antizipierter Sektor=="vorne_unten_li") {
                  G.AnnahmeErfolgreich=true;
                  FuehreBallaufBrett();
                  G.letztePhaseAbgeschlossen=true;
            }
             if (other.gameObject.name == "Ball" && antizipierter Sektor=="hinten_oben_li") {
                  G.AnnahmeErfolgreich=true;
                  FuehreBallaufBrett();
                  G.letztePhaseAbgeschlossen=true;
            }
            if (other.gameObject.name == "Ball" && antizipierter Sektor=="hinten_oben_re") {
                  G.AnnahmeErfolgreich=true;
                  FuehreBallaufBrett();
                  G.letztePhaseAbgeschlossen=true;
            }
            if (other.gameObject.name == "Ball" && antizipierter Sektor=="hinten_unten_re") {
                  G.AnnahmeErfolgreich=true;
                  FuehreBallaufBrett();
                  G.letztePhaseAbgeschlossen=true;
            }
            if (other.gameObject.name == "Ball" && antizipierter Sektor=="hinten_unten_li") {
                  G.AnnahmeErfolgreich=true;
                  FuehreBallaufBrett();
                  G.letztePhaseAbgeschlossen=true;
            }        
               
      }    
    
}

function FuehreBallaufBrett(){
      var Brett = Spieler[aktSpieler-1].rechterUnterarm;
      myVector=Ball.transform.position - Brett.transform.position;
      Ball.transform.Move(myVector);
}