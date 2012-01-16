
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
}



function AngriffTasten(){
	if(Input.GetKeyDown("return")){ 	WechsleSpieler ();  }
}
function AnnahmeTasten(){}
function BlockTasten(){}
function AufschlagTasten() {}
function ZuspielTasten(){}
