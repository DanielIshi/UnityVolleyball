function StemmschrittBeginnen () {}
function Schlag () {}
function Finte () {}
function Lobschlag () {}
function RichtungFeststellen() {}
function AnnahmeImOberenZuspiel () {}

function Baggern () {
      
      if (G.kurz_nach_vorn)    {  Kniestand(); }
      if (G.kurz_nach_links)   {  seitlicherBaggerLinks();  }
      if (G.kurz_nach_rechts)  {  seitlicherBaggerRechts(); }
      if (G.kurz_nach_hinten && !G.kurz_nach_links && !G.kurz_nach_rechts)  {  BaggerMitHopRw(); }
      if (G.kurz_nach_hinten && G.kurz_nach_links )  {  BaggerAufgedrehtL();  }
      if (G.kurz_nach_hinten && G.kurz_nach_rechts )  {   BaggerAufgedrehtR(); }

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