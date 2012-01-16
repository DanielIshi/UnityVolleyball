function OnCollisionEnter(collision : Collision) {
      
      if (G.Phase=="Annahme" ) {
            if (other.gameObject.name == "Ball" && antizipierter Sektor=="vorne_oben") {
                  G.AnnahmeErfolgreich=true;
                  G.letztePhaseAbgeschlossen=true;
            }
      }
      
      
      // Debug-draw all contact points and normals
      for (var contact : ContactPoint in collision.contacts) {
            Debug.DrawRay(contact.point, contact.normal, Color.white);
      }
      
     
}