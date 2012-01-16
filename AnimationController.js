function StemmschrittBeginnen () {}
function Schlag () {}
function Finte () {}
function Lobschlag () {}
function RichtungFeststellen() {}
function AnnahmeImOberenZuspiel () {}

function Baggern () {
      
      if (G.kurz_nach_vorn)    {  Anim("Kniestand"); }
      if (G.kurz_nach_links)   {  Anim("seitlicherBaggerLinks");  }
      if (G.kurz_nach_rechts)  {  Anim("seitlicherBaggerRechts"); }
      if (G.kurz_nach_hinten && !G.kurz_nach_links && !G.kurz_nach_rechts)  { Anim("BaggerMitHopRw"); }
      if (G.kurz_nach_hinten && G.kurz_nach_links )  {   Anim("BaggerAufgedrehtL");  }
      if (G.kurz_nach_hinten && G.kurz_nach_rechts )  {  Anim("BaggerAufgedreht"); }

} 
function Rutschbagger () {}
function Blockabsprung () {}
function AktivBlocken ()  {}
function PassivBlocken () {}
function AufschlagArtUmschalten () {}
function Anwurf () {}
function HarterAufSchlag () {}
function DriveAufschlag ()  {} 
function ErstesTempoZuspiel () {}
function ZweitesTempoZuspiel () {}
function DrittesTempoZuspiel() {}
function Hinterfeldpass () {}
function Fallen() {}
function Handabwehr() {}
function Abstuetzen() {}

function Anim(text){
       G.Spieler[aktSpieler-1].animation.play(text);
}