var camera1 : Camera; var camera2 : Camera;
var GesteuerterSpieler : GameObject;
 


function Start () {
  camera1.enabled = true;	camera2.enabled = false;  
  G.Spieler.push(GameObject.Find("Spieler1")); G.Spieler.push(GameObject.Find("Spieler2"));  G.Spieler.push(GameObject.Find("Spieler3"));
  G.Spieler.push(GameObject.Find("Spieler4"));  G.Spieler.push(GameObject.Find("Spieler5"));  G.Spieler.push(GameObject.Find("Spieler6"));
  
  G.Gegner.push(GameObject.Find("Gegner1")); G.Gegner.push(GameObject.Find("Gegner2"));  G.Gegner.push(GameObject.Find("Gegner3"));
  G.Gegner.push(GameObject.Find("Gegner4"));  G.Gegner.push(GameObject.Find("Gegner5"));  G.Gegner.push(GameObject.Find("Gegner6"));
  
  Aufschlag();

}

function Aufschlag(){
      G.aktSpieler=1;
      G.SpielLaueft=true;
      G.letztePhaseAbgeschlossen=true;
      G.Phase = "Aufschlag";
}


function WechsleSpieler () { G.aktSpieler+=1; }



function Update () {   
 
  if(Input.GetKeyDown("backspace")){ 	WechsleSpieler ();  }
  //if(Input.GetKeyDown("space")){ 	G.Spieler[G.aktSpieler-1].animation.Play("Stemmschritt und Schlag");  }
  
  if (G.SpielLaueft==true) {
	if (G.letztePhaseAbgeschlossen==true) {

    if (G.Phase=="Aufschlag") {AufschlagVorbereitung();AufschlagTasten();}


		if (G.Phase=="AnnahmeWartend") {AnnahmeVorbereitungTasten();}
		if (G.Phase=="Annahme") {AnnahmeTasten();}
		if (G.Phase=="Zuspiel") {ZuspielTasten();}
		if (G.Phase=="Angriff") {AngriffTasten();}
		if (G.Phase=="Angriffssicherung") {}
		if (G.Phase=="UebergangZumK2"){}
		if (G.Phase=="Blockvorbereitung") {BlockVorbereitungTasten();}
		if (G.Phase=="Blockhandlung") {BlockTasten();}
		if (G.Phase=="Feldabwehr") {AbwehrTasten();}

	
	}
        
    }

  
  
  
}










function AnnahmeVorbereitungTasten()	{ 	NormalLinksRechtsObenUnten();}	
function BlockVorbereitungTasten()	{  	NormalLinksRechts(); }
function AufschlagVorbereitung() 	{	NormalLinksRechtsObenUnten();}

function AngriffTasten(){
	if(Input.GetKeyDown("space"))  		{ 	AnimationController.StemmschrittBeginnen ();  }
	if(Input.GetKeyDown("return")) 		{ 	AnimationController.Schlag ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	AnimationController.Finte ();  }
	if(Input.GetKeyDown("backspace")) 	{ 	AnimationController.Lobschlag ();  }
}
function AnnahmeTasten(){
	RichtungFeststellen();
	if(Input.GetKeyDown("space"))  		{ 	AnimationController.AnnahmeImOberenZuspiel ();  }
	if(Input.GetKeyDown("return")) 		{ 	AnimationController.Baggern ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	AnimationController.Rutschbagger ();  }	
	
}
function BlockTasten(){
	if(Input.GetKeyDown("space"))  		{ 	AnimationController.Blockabsprung ();  }  
	// if (Input.GetButton ("Jump")) { }
 	//moveDirection.y -= gravity * Time.deltaTime;   	// Apply gravity
	if(Input.GetKeyDown("return")) 		{ 	AnimationController.AktivBlocken ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	AnimationController.PassivBlocken ();  }
}
function AufschlagTasten() {
	if(Input.GetKeyDown("left alt")) 	{ 	AnimationController.AufschlagArtUmschalten ();  }
	if(Input.GetKeyDown("space"))  		{ 	AnimationController.Anwurf ();  }
	if(Input.GetKeyDown("return")) 		{ 	AnimationController.HarterAufSchlag ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	AnimationController.DriveAufschlag ();  }
}
function ZuspielTasten(){
	if(Input.GetKeyDown("left alt")) 	{ 	AnimationController.ErstesTempoZuspiel ();  }
	if(Input.GetKeyDown("space"))  		{ 	AnimationController.ZweitesTempoZuspiel ();  }
	if(Input.GetKeyDown("return")) 		{ 	AnimationController.DrittesTempoZuspiel  ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	AnimationController.Hinterfeldpass ();  }
}
function AbwehrTasten(){
	if(Input.GetKeyDown("left alt")) 	{ 	AnimationController.Fallen ();  }
	if(Input.GetKeyDown("space"))  		{ 	AnimationController.Handabwehr ();  }
	if(Input.GetKeyDown("return")) 		{ 	AnimationController.Abstuetzen  ();  }
}








////______________________________________/////


var jumpSpeed : float = 8.0;
var gravity : float = 20.0;
var speed : float = 6.0;

//private var moveDirection : Vector3 = Vector3.zero;


function NormalLinksRechts(){  
	var sideward : Vector3 = transform.TransformDirection(Vector3.right);
	var sideSpeed : float = speed * Input.GetAxis ("Horizontal");
	G.Spieler[G.aktSpieler-1].GetComponent(Move).bewege (sideward , sideSpeed);	
}

function NormalLinksRechtsObenUnten(){
    
		var moveDirection = Vector3(Input.GetAxis("Horizontal"), 0,	Input.GetAxis("Vertical")); // We are grounded, so recalculate // move direction directly from axes
		//moveDirection = transform.TransformDirection(moveDirection);
		moveDirection *= speed;

  G.Spieler[G.aktSpieler-1].GetComponent(Move).bewege (moveDirection , speed);		
}




function RichtungFeststellen(){
   var LRvalue = Input.GetAxis ("Horizontal");
   var OUvalue = Input.GetAxis ("Vertical");
                                                                                                                       
   G.kurz_nach_links  = false; G.mittel_nach_links = false;  G.lange_nach_links = false;  G.kurz_nach_rechts = false;  G.lange_nach_rechts = false;
   G.kurz_nach_unten = false; G.mittel_nach_unten = false;  G.lange_nach_unten = false;  G.kurz_nach_oben = false;  G.mittel_nach_oben = false;  G.lange_nach_oben = false;

   if (LRvalue!=0) {
        if ( (LRvalue < 0.01) && (LRvalue > -0.33) )   {G.kurz_nach_links = true; }
        if ( (LRvalue<= -0.33) && (LRvalue > -0.66) ) {G.mittel_nach_links = true; }
        if ( (LRvalue<= -0.66) && (LRvalue >= -1) )  {G.lange_nach_links = true; }
        
         if ( (LRvalue > 0.01) && (LRvalue < 0.33) )   {G.kurz_nach_rechts = true;}
        if ( (LRvalue >= 0.33) && (LRvalue < 0.66) ) {G.mittel_nach_rechts = true;}
        if ( (LRvalue >= 0.66) && (LRvalue <= 1) )  {G.lange_nach_rechts = true;}
        
   } 
 
   if (OUvalue!=0) {
        if ( (OUvalue < 0.01) && (OUvalue > -0.33) )   {G.kurz_nach_unten = true;}
        if ( (OUvalue<= -0.33) && (OUvalue > -0.66) ) {G.mittel_nach_unten = true;}
        if ( (OUvalue<= -0.66) && (OUvalue >= -1) )  {G.lange_nach_unten = true;}
        
         if ( (OUvalue > 0.01) && (OUvalue < 0.33) )   {G.kurz_nach_oben = true; ;}
        if ( (OUvalue >= 0.33) && (OUvalue < 0.66) ) {G.mittel_nach_oben = true;}
        if ( (OUvalue >= 0.66) && (OUvalue <= 1) )  {G.lange_nach_oben = true;}
        
   }
   
    if (LRvalue==0 && OUvalue==0) {Debug.Log ("");}

}