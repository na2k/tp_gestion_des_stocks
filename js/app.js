var arr = [];
(function init(){

  var ref = 1;
  var Produit = function(produit){
    this.ref = produit.ref;
    this.name = produit.name;
    this.price = produit.price;
    this.desc = produit.desc;
    this.color = produit.color;
    this.weight = produit.weight;
  }

  window.onload = function init(){
    var ajouterProduit = document.getElementById("validerFormulaire");
    ajouterProduit.onclick = function(nom, prix, description, couleur, poids, reference){
      nom=document.getElementById("formulaireNom").value;
      prix=document.getElementById("formulairePrix").value;
      description=document.getElementById("formulaireDescription").value;
      couleur=document.getElementById("formulaireCouleur").value;
      poids=document.getElementById("formulairePoids").value;
      reference = ref;
      if (nom == "  " || prix == "" || description == "") {
        alert("Veuillez remplir tous les champs obligatoires");
      }
      else{
        var produit = new Produit({
          ref: reference,
          name: nom,
          price: prix,
          desc: description,
          color: couleur,
          weight: poids,
        });
        arr.push(produit);
        document.getElementById("listeProduits").innerHTML="<tr><th>Référence</th><th>Nom</th><th>Prix</th><th>Description</th><th>Couleur</th><th>Poids</th></tr>";
        for (var i = 0; i < arr.length; i++) {
          document.getElementById("listeProduits").innerHTML += "<tr><td>"+arr[i].ref+"</td><td>"+arr[i].name+"</td><td>"+arr[i].price+"</td><td>"+arr[i].desc+"</td><td>"+arr[i].color+"</td><td>"+arr[i].weight+"</td><td class='delete' id='supprimer"+i+"' ><button type='button' onclick='modifierProduit("+i+")'><i class='fa fa-pencil' aria-hidden='true'></i></button><button type='button' onclick='supprimerProduit("+i+")'><i class='fa fa-trash-o' aria-hidden='true'></i></button></td></tr>";
        }
        document.getElementById("formulaireNom").value="";
        document.getElementById("formulairePrix").value="";
        document.getElementById("formulaireDescription").value="";
        document.getElementById("formulaireCouleur").value="";
        document.getElementById("formulairePoids").value="";
        console.log(arr); // log l'array contenant les produits
        ref++;
      }
    }


  }; //fin window.onload

}()); //fin init

function supprimerProduit(p){           //supprime un produit
  alert("produit supprimé");
  console.log(p);
  for (var j = 0; j < arr.length; j++) {
    if(j === p){
      arr.splice(p, 1);
      console.log(arr);
    }
  }
  document.getElementById("listeProduits").innerHTML="<tr><th>Référence</th><th>Nom</th><th>Prix</th><th>Description</th><th>Couleur</th><th>Poids</th></tr>";
  for (var i = 0; i < arr.length; i++) {
    document.getElementById("listeProduits").innerHTML += "<tr><td>"+arr[i].ref+"</td><td>"+arr[i].name+"</td><td>"+arr[i].price+"</td><td>"+arr[i].desc+"</td><td>"+arr[i].color+"</td><td>"+arr[i].weight+"</td><td class='delete' id='supprimer"+i+"' ><button type='button' onclick='modifierProduit("+i+")'><i class='fa fa-pencil' aria-hidden='true'></i></button><button type='button' onclick='supprimerProduit("+i+")'><i class='fa fa-trash-o' aria-hidden='true'></i></button></td></tr>";
  }
}

function modifierProduit(p){            // crée le formulaire modif
  console.log(p);
  document.getElementById("modif").innerHTML="<h2>Modifier un produit</h2>"
  document.getElementById("modif").innerHTML+="<p>N° de réf:"+arr[p].ref+"</p>"
  document.getElementById("modif").innerHTML+="<div id='listeModif'><ul><li>Nom*: <input type='text' class='modifFormulaire' id='modifNom' value='"+arr[p].name+"'></li>";
  document.getElementById("modif").innerHTML+="<li>Prix*: <input type='number' class='modifFormulaire' id='modifPrix' value='"+arr[p].price+"'></li>";
  document.getElementById("modif").innerHTML+="<li>Description*:<input type='text' class='modifFormulaire' id='modifDescription' value='"+arr[p].desc+"'></li>";
  document.getElementById("modif").innerHTML+="<li>Couleur: <input type='text' class='modifFormulaire' id='modifCouleur' value='"+arr[p].color+"'></li>";
  document.getElementById("modif").innerHTML+="<li>Poids: <input type='number' class='modifFormulaire' id='modifPoids' value='"+arr[p].weight+"'></li></ul>";
  document.getElementById("modif").innerHTML+="<button type='button' id='annulerModif' onclick='annuler()'>Annuler</button>";
  document.getElementById("modif").innerHTML+="<button type='button' id='validerModif' onclick='modification("+p+")'>Modifier</button>";
}

function annuler(){                   // annule modif en effaçant le formulaire
  document.getElementById("modif").innerHTML="";
}

function effacer(){                   //efface les input
  document.getElementById("formulaireNom").value="";
  document.getElementById("formulairePrix").value="";
  document.getElementById("formulaireDescription").value="";
  document.getElementById("formulaireCouleur").value="";
  document.getElementById("formulairePoids").value="";
}

function modification(p){           //modifie le produit sélectionné
  var nom = document.getElementById("modifNom").value;
  var prix = document.getElementById("modifPrix").value;
  var description = document.getElementById("modifDescription").value;
  if (nom != "" && prix != "" && description != "") {

    alert("Le produit a été modifié");
    console.log(p);
    for (var i = 0; i < arr.length; i++) {
      if (i == p) {
        arr[p].name = document.getElementById("modifNom").value;
        arr[p].price = document.getElementById("modifPrix").value;
        arr[p].desc = document.getElementById("modifDescription").value;
        arr[p].color = document.getElementById("modifCouleur").value;
        arr[p].weight = document.getElementById("modifPoids").value;
        console.log(arr[p].name);
      }
    }
    document.getElementById("listeProduits").innerHTML="<tr><th>Référence</th><th>Nom</th><th>Prix</th><th>Description</th><th>Couleur</th><th>Poids</th></tr>";
    for (var i = 0; i < arr.length; i++) {
      document.getElementById("listeProduits").innerHTML += "<tr><td>"+arr[i].ref+"</td><td>"+arr[i].name+"</td><td>"+arr[i].price+"</td><td>"+arr[i].desc+"</td><td>"+arr[i].color+"</td><td>"+arr[i].weight+"</td><td class='delete' id='supprimer"+i+"' ><button type='button' onclick='modifierProduit("+i+")'><i class='fa fa-pencil' aria-hidden='true'></i></button><button type='button' onclick='supprimerProduit("+i+")'><i class='fa fa-trash-o' aria-hidden='true'></i></button></td></tr>";
    }

    document.getElementById("modif").innerHTML="";
  }
  else {
    alert("Veuillez remplir tous les champs obligatoires");
  }
}
