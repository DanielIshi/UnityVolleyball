<?php


if( !isset($_POST['upload']) OR empty($_POST['upload']) ) {
    echo <<<HTML
<form name="Test2" id="Test2" enctype="multipart/form-data" action="GIT.php" method="post">
    <fieldset>
        <legend>Neue Datei anlegen</legend>
    <p>
        <label for="verz_id">Verzeichnis:</label>
        <input name="verz" id="verz_id" />  

        <label for="datei_id">Name:</label>
        <input name="datei" id="datei_id" />        
       
    </p>
    </fieldset>
     <fieldset>
        <legend>Datei loeschen</legend>
    <p>
        <label for="verz_idL">Verzeichnis:</label>
        <input name="verzL" id="verz_idL" />  

        <label for="datei_id">Name:</label>
        <input name="dateiL" id="datei_idL" />        
        
    </p>
    </fieldset>
    <input type="checkbox" name="ziehen" value="ziehen"> Alles vom Server ziehen<br>
     <input type="submit" name="upload" value="ausfuehren" />
HTML;
}
else {


 if( isset($_POST['datei']) AND !isset($_POST['ziehen'])  )
 {
  $some_file = $_POST['datei'];
  $verz = $_POST['verz'];

  $Dateiname=$some_file;

  passthru('cd /var/www/vhosts/info-volleyball.de/httpdocs/unityvolleyball.de/UnityVolleyball/', $erg); echo $erg;
  $output = shell_exec('sudo touch '.$Dateiname);
  echo $output."<br>";
  $output = shell_exec('sudo git add '.$Dateiname);
  echo $output."<br>";
  $output = shell_exec('sudo git commit -m "Adding new file: '.$Dateiname.'"');
  echo $output."<br>";
  $output = shell_exec('sudo git push origin master');
  echo $output."<br>";
 }



    
 if( isset($_POST['dateiL']) AND  !isset($_POST['ziehen'])   )
 {
   $some_fileL = $_POST['dateiL'];
   $verzL = $_POST['verzL'];

   $Dateiname=$some_fileL;

   passthru('cd /var/www/vhosts/info-volleyball.de/httpdocs/unityvolleyball.de/UnityVolleyball/', $erg); echo $erg;
   $output = shell_exec('sudo git rm '.$Dateiname);
   echo $output."<br>";
   $output = shell_exec('sudo git commit -m "Deleting file: '.$Dateiname.'"');
   echo $output."<br>";
   $output = shell_exec('sudo git push origin master');
   echo $output."<br>";
  }

 if( isset($_POST['ziehen']))
 { 
     $output = shell_exec('sudo git pull origin master');
      echo $output."<br>";;
 }


}





?>