var camera1 : Camera;
var camera2 : Camera;

var GesteuerterSpieler : GameObject;


var Spieler = new Array ();
var aktSpieler=1;  


function Start () {
  camera1.enabled = true;
	camera2.enabled = false;
  
  Spieler.push(GameObject.Find("Spieler1"));
  Spieler.push(GameObject.Find("Spieler2"));
  Spieler.push(GameObject.Find("Spieler3"));
  Spieler.push(GameObject.Find("Spieler4"));
  Spieler.push(GameObject.Find("Spieler5"));
  Spieler.push(GameObject.Find("Spieler6"));

}

   


function WechsleSpieler (){      
      aktSpieler+=1;
}



function Update () {   
  if(Input.GetKeyDown("1")){  camera1.enabled = true; 	camera2.enabled = false; }
  if(Input.GetKeyDown("2")){ 	camera1.enabled = false; 	camera2.enabled = true;  }
  if(Input.GetKeyDown("return")){ 	WechsleSpieler ();  }
  if(Input.GetKeyDown("space")){ 	Spieler[aktSpieler-1].animation.Play("Stemmschritt");  }
  
  if (G.SpielLaueft==true) {
	if (G.letztePhaseAbgeschlossen==true) {

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
	if(Input.GetKeyDown("space"))  		{ 	StemmschrittBeginnen ();  }
	if(Input.GetKeyDown("return")) 		{ 	Schlag ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	Finte ();  }
	if(Input.GetKeyDown("backspace")) 	{ 	Lobschlag ();  }
}
function AnnahmeTasten(){
	RichtungFeststellen();
	if(Input.GetKeyDown("space"))  		{ 	AnnahmeImOberenZuspiel ();  }
	if(Input.GetKeyDown("return")) 		{ 	Baggern ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	Rutschbagger ();  }	
	
}
function BlockTasten(){
	if(Input.GetKeyDown("space"))  		{ 	Blockabsprung ();  }  
	// if (Input.GetButton ("Jump")) { moveDirection.y = jumpSpeed;}
 	//moveDirection.y -= gravity * Time.deltaTime;   	// Apply gravity
	if(Input.GetKeyDown("return")) 		{ 	AktivBlocken ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	PassivBlocken ();  }
}
function AufschlagTasten() {
	if(Input.GetKeyDown("left alt")) 	{ 	AufschlagArtUmschalten ();  }
	if(Input.GetKeyDown("space"))  		{ 	Anwurf ();  }
	if(Input.GetKeyDown("return")) 		{ 	HarterAufSchlag ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	DriveAufschlag ();  }
}
function ZuspielTasten(){
	if(Input.GetKeyDown("left alt")) 	{ 	ErstesTempoZuspiel ();  }
	if(Input.GetKeyDown("space"))  		{ 	ZweitesTempoZuspiel ();  }
	if(Input.GetKeyDown("return")) 		{ 	DrittesTempoZuspiel  ();  }
	if(Input.GetKeyDown("right alt")) 	{ 	Hinterfeldpass ();  }
}
function AbwehrTasten(){
	if(Input.GetKeyDown("left alt")) 	{ 	Fallen ();  }
	if(Input.GetKeyDown("space"))  		{ 	Handabwehr ();  }
	if(Input.GetKeyDown("return")) 		{ 	Abstuetzen  ();  }
}








////______________________________________/////

var speed : float = 6.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;
private var moveDirection : Vector3 = Vector3.zero;


function NormalLinksRechts(){
	var controller : CharacterController = GetComponent(CharacterController);
	if (controller.isGrounded) {		
		moveDirection = Vector3(Input.GetAxis("Horizontal"), 0,	0);  // We are grounded, so recalculate // move direction directly from axes
		moveDirection = transform.TransformDirection(moveDirection);
		moveDirection *= speed;
	}		
	controller.Move(moveDirection * Time.deltaTime);  	// Move the controller	
}

function NormalLinksRechtsObenUnten(){
	var controller : CharacterController = GetComponent(CharacterController);
	if (controller.isGrounded) {		
		moveDirection = Vector3(Input.GetAxis("Horizontal"), 0,	Input.GetAxis("Vertical")); // We are grounded, so recalculate // move direction directly from axes
		moveDirection = transform.TransformDirection(moveDirection);
		moveDirection *= speed;
	}	
	controller.Move(moveDirection * Time.deltaTime);  	// Move the controller	
}
