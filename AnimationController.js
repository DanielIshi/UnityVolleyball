

static function Anim(text){
       G.Spieler[G.aktSpieler-1].animation.play(text);
}

static function StemmschrittBeginnen () {}
static function Schlag () {}
static function Finte () {}
static function Lobschlag () {}
static function RichtungFeststellen() {}
static function AnnahmeImOberenZuspiel () {}

static function Baggern () {
      
      if (G.kurz_nach_vorn)    {  Anim("Kniestand"); }
      if (G.kurz_nach_links)   {  Anim("seitlicherBaggerLinks");  }
      if (G.kurz_nach_rechts)  {  Anim("seitlicherBaggerRechts"); }
      if (G.kurz_nach_hinten && !G.kurz_nach_links && !G.kurz_nach_rechts)  { Anim("BaggerMitHopRw"); }
      if (G.kurz_nach_hinten && G.kurz_nach_links )  {   Anim("BaggerAufgedrehtL");  }
      if (G.kurz_nach_hinten && G.kurz_nach_rechts )  {  Anim("BaggerAufgedreht"); }

} 
static function Rutschbagger () {}
static function Blockabsprung () {}
static function AktivBlocken ()  {}
static function PassivBlocken () {}
static function AufschlagArtUmschalten () {Debug.Log("aufschlag gewechselt");}
static function Anwurf () {
          Debug.Log("Anwurf");
          var ball:GameObject = GameObject.Find("Ball");
          ball.rigidbody.AddForce (Vector3.up * 1000);
}
static function HarterAufSchlag () {
          Debug.Log("Harter Aufschlag");
           var ball:GameObject = GameObject.Find("Ball");
          ball.rigidbody.AddRelativeForce (0, 1000, 3000);
}
static function DriveAufschlag ()  {Debug.Log("Drive Aufschlag");} 
static function ErstesTempoZuspiel () {}
static function ZweitesTempoZuspiel () {}
static function DrittesTempoZuspiel() {}
static function Hinterfeldpass () {}
static function Fallen() {}
static function Handabwehr() {}
static function Abstuetzen() {}

