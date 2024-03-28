function afficher_texte(id){
    var span = document.getElementById(id);
    if(span.style.display == "none") {
      span.style.display = "inline";
    } else {
      span.style.display = "none";
    }
  }