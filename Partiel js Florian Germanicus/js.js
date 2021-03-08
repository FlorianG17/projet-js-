//date

var date=[["01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
26 , 27, 28, 29, 30, 31],["01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12]];


//remplissage du select jour avec l'objet Date
var datePardefaut = new Date();


// jour par defaut
document.querySelector("select").innerHTML = "<option>"+  datePardefaut.getDate() + "</option>";


for( var i = 0; i < date[0].length ; i++){
      document.querySelector("select").innerHTML += "<option>"+ date[0][i] + "</option>";

}


//remplissage du select mois  

//   mois par defaut
var mois=datePardefaut.getMonth() +1;
document.getElementById("mois").innerHTML = "<option>"+ mois + "</option>";


for( var i = 0; i < date[1].length ; i++){
     document.getElementById("mois").innerHTML += "<option>"+ date[1][i] + "</option>";

}

//remplissage du select année
var anneeReferenceSup ;
var anneeReferenceInf;

//  année par defaut
document.getElementById("annee").innerHTML = "<option>"+ datePardefaut.getFullYear() +"</option>";


for(var i=100 ; i>0; i--){


    anneeReferenceInf=datePardefaut.getFullYear()-i;

      document.getElementById("annee").innerHTML += "<option>"+ anneeReferenceInf+ "</option>";

}


for(var i=0 ; i<100; i++){

    anneeReferenceSup= datePardefaut.getFullYear()+i ;

document.getElementById("annee").innerHTML += "<option>"+ anneeReferenceSup+ "</option>";

   }

    // remplissage automatique libelle et prix unitaire

        function remplir(x){//x est le contenu de l'option avec un code
          for(var i=0; i<tabpdt.length;i++){
                if(x==tabpdt[i].codepdt){
                     document.getElementById("ht").innerHTML=tabpdt[i].libelle;
                     document.getElementById("tva").innerHTML=tabpdt[i].prixU; 
                }
        }
    }

 
    //  mettre les champs à zero si rien n'est selectionner

    document.querySelectorAll("text")[0].addEventListener("click",

    function () {
            document.getElementById("ht").innerHTML = "0";
            document.getElementById("tva").innerHTML = "20%";
            document.getElementById("ttc").innerHTML = "0";
        });

 


// fonction qui calcule le ttc

function CalculerMontantTTC()
{
if (isNaN(Form1.ht.value) == true)
{
alert('Merci de saisir un montant correct. Calcul impossible.');
Form1.ht.value = '0';
}
else
{
Form1.tva.value = (Form1.ht.value / 100) * 20 ;
Form1.ttc.value = Number(Form1.ht.value) + Number(Form1.tva.value) ;
}
}



var btnPopup = document.getElementById('btnPopup');//récupère l'id du bouton btnPopup.
var overlay = document.getElementById('overlay');//récupère l'id de l'élément overlay
btnPopup.addEventListener('click',openMoadl);//rècupère l'événement clic sur le bouton btnPopup et déclenche la fonction openModal.
function openMoadl() {
overlay.style.display='block';
}
var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
btnPopup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}
var btnClose = document.getElementById('btnClose');//:Récupérer l'id de l'élément btnClose.
btnClose.addEventListener('click',closeModal);//:récupèrer l'évenement clic et déclenche la fonction closeModal
function closeModal() {
overlay.style.display='none';
} //définit la fonction qui ferme la popup en rendant invisible l'élément overlay;
 
 




