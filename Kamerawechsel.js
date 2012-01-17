//Bli Bla und Blub und überhaupt

var camera1 : Camera;
var camera2 : Camera;
var camera3 : Camera;


function Start () {
	camera1.enabled = false;
	camera2.enabled = true;
	camera3.enabled = false;
}

function Update () {
   
   camera3 = G.Spieler[G.aktSpieler-1].transform.Find("FPCamera").camera;


	if(Input.GetKeyDown("1")){
	camera1.enabled = true;
	camera2.enabled = false;
	camera3.enabled = false;
}

if(Input.GetKeyDown("2")){
	camera1.enabled = false;
	camera2.enabled = true;
	camera3.enabled = false;
  }
 if(Input.GetKeyDown("3")){
	camera1.enabled = false;
	camera2.enabled = false;
	camera3.enabled = true;
  }
  
}

