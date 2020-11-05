


var jour = 1;
var pop     = 20 , popMax = 20;

var niveauDeMaison = 1;
var niveauDeCaserne = 1;
var or      = 0 , orGagnable =0  , popOr      = 0 , popMineOrMax = 10        , nombreMineDor = 1 ;
var fer     = 0 , ferGagnable =0,  popFer     = 0 , popMineFerMax = 10       , nombreMineFer = 1 ;                    
var gaz     = 0 , gazGagnable=0,   popGaz     = 0 , popMineGazMax = 5        , nombreMineGaz = 1 ;
var mur     = 10, murMax = 10;
var                                popMineSoldatMax = 20; 

class alienN{
  constructor(nombre,pv,atk) {
    this.nombre = nombre;
    this.pv = Math.round(nombre/2);
    this.atk = Math.round(nombre/2);; 
  }
}
    var alien0 = new alienN(1,this.pv,this.atk);
class soldatN{
  constructor(nombre,pv,atk) {
    this.nombre = nombre;
    this.pv = this.nombre*2;
    this.atk = this.nombre*2; 
  }}
    var soldat0 = new soldatN(10,20,20);
class charDeCombatN{
  constructor(nombre,pv,atk) {
    this.nombre = nombre;
    this.pv = this.nombre*10;
    this.atk = this.nombre*10; 
  }}
    var charDeCombat0 = new charDeCombatN(0,this.pv,this.atk);
class tourelleAutoN{
  constructor(nombre,pv,atk) {
    this.nombre = nombre;
    this.pv = this.nombre*5;
    this.atk = this.nombre*5; 
  }}
    var tourelleAuto0 = new tourelleAutoN(0,this.pv,this.atk); 

var widthBarreChars = 100
var caserne = 1;
var charDeCombat = charDeCombat0.nombre;
var tourelleAuto = tourelleAuto0.nombre;
let buttonRecrutTable = document.getElementById("recrutButton");
let button0 = document.getElementById('yes');
let button1 = document.getElementById('non');
var current0 = 1;
var current1 = 1;
var current2 = 1;
var current3 = 1;
function aspect0() {
if (current0 == 1) {
  document.getElementById("recrutTable").style.display ="block";
  current0 = 2;	
} else {
  document.getElementById("recrutTable").style.display ="none";
  current0 = 1;	
}
}
function aspect1() {
if (current1 == 1) {
  document.getElementById("batimentTable").style.display ="block";
  current1 = 2;	
} else {
  document.getElementById("batimentTable").style.display ="none";
  current1 = 1;	
}
}
function aspect2() {
if (current2 == 1) {
  document.getElementById("deployementTable").style.display ="block";
  current2 = 2;	
} else {
  document.getElementById("deployementTable").style.display ="none";
  current2 = 1;	
}
}
function aspect3() {
if (current3 == 1) {
  document.getElementById("GererPop").style.display ="block";
  current3 = 2;	
} else {
  document.getElementById("GererPop").style.display ="none";
  current3 = 1;	
}
}
let aideMur = document.getElementById('repMur');
aideMur.addEventListener("mouseenter", aideMurAffiche);
aideMur.addEventListener("mouseleave", aideMurDisparait);
function aideMurAffiche(){
    document.getElementById("aideMur").style.display = "block"
}
function aideMurDisparait(){
    document.getElementById("aideMur").style.display = "none"    
}   
updateRessource() 
document.getElementById("pvChar").style.display = "none"
document.getElementById("minusOr").disabled = true;
document.getElementById("minusFer").disabled = true; 
document.getElementById("minusGaz").disabled = true;
document.getElementById("valid").disabled = true;
document.getElementById("nextDay").disabled = true; 
document.getElementById("aideMur").style.display = "none"
document.getElementById("recrutTable").style.display = "none"
document.getElementById("batimentTable").style.display = "none"
document.getElementById("deployementTable").style.display = "none"
document.getElementById("GererPop").style.display = "none"

function closeAide(){
    document.getElementById("aide").style.display ="none"
}
   
function updateButton(){
    //          PLUS        //

    if  (popOr  < popMineOrMax ){
            document.getElementById("plusOr").disabled = false;  
    }
        else {
            document.getElementById("plusOr").disabled = true; 
    }
    if  (popFer  < popMineFerMax ){
            document.getElementById("plusFer").disabled = false;  
    }
        else {
            document.getElementById("plusFer").disabled = true; 
    }
    if  (popGaz < popMineGazMax ){
            document.getElementById("plusGaz").disabled = false;  
    }
        else {
            document.getElementById("plusGaz").disabled = true; 
    }
    //         MINUS        //
    
    if ( popOr == 0){
            document.getElementById("minusOr").disabled = true;     
        }
        else {
            document.getElementById("minusOr").disabled = false; 
    }
    if ( popFer == 0){
            document.getElementById("minusFer").disabled = true;     
        }
        else {
            document.getElementById("minusFer").disabled = false; 
    }     
    if ( popGaz == 0){
            document.getElementById("minusGaz").disabled = true;     
        }
        else {
            document.getElementById("minusGaz").disabled = false; 
    }
    if ( soldat0.nombre >= popMineSoldatMax){
           document.getElementById("plusSoldat").disabled = true; 
    }
        else {
           document.getElementById("plusSoldat").disabled = false; 
        }
    if (pop == 0){
            document.getElementById("plusOr").disabled = true;
            document.getElementById("plusFer").disabled = true;
            document.getElementById("plusGaz").disabled = true;
            document.getElementById("plusSoldat").disabled = true;
            document.getElementById("valid").disabled = false;
     }
    else {
            document.getElementById("valid").disabled = true;
    }
    if (popOr == popMineOrMax && popFer == popMineFerMax && popGaz == popMineGazMax && soldat0.nombre == popMineSoldatMax){
            document.getElementById("valid").disabled = false;
    }


    
       
}        
//--------------------------OR---------------------------------------------------------       
function plusOr(){
    pop -= 1;
    popOr +=1;
    updateRessource()
    updateButton()
    document.getElementById("qtOrtab").innerHTML= orGagnable = popOr*2;
    updateRessource()
}
function minusOr(){
    
    pop += 1;
    popOr -=1;
    updateRessource()
    document.getElementById("qtPop").innerHTML = pop;
 
    document.getElementById("qtOrtab").innerHTML=  orGagnable = popOr*2;
    updateRessource()
    
    updateButton()
}      
//--------------------------FER--------------------------------------------------------    
function plusFer(){
    pop    -= 1;
    popFer += 1 ;
    document.getElementById("qtPop").innerHTML = pop;
    updateButton()
    updateRessource()
    document.getElementById("qtFertab").innerHTML= ferGagnable = popFer *2;
    updateRessource()
}
function minusFer(){   
    pop     += 1;
    popFer  -=1;
    updateRessource()
    document.getElementById("qtPop").innerHTML = pop;
    document.getElementById("qtFertab").innerHTML= ferGagnable = popFer *2;
    updateRessource()
    updateButton()
}              
//-------------------------GAZ---------------------------------------------------------      
function plusGaz(){ 
    pop   -= 1;
    popGaz += 1 ;
    updateRessource()
    document.getElementById("qtPop").innerHTML = pop; 
    updateButton()

    document.getElementById("qtGaztab").innerHTML= gazGagnable = popGaz *2 ;
    updateRessource()
}
function minusGaz(){ 
    pop     += 1;
    popGaz  -= 1;
    updateRessource()
    document.getElementById("qtPop").innerHTML = pop;
    document.getElementById("qtGaztab").innerHTML= gazGagnable = popGaz *2 ;
    updateButton()
    updateRessource()
}    
//-------------------------SOLDAT------------------------------------------------------    
function plusSoldat(){
    pop -= 1;
    plusUnSoldat(1) 
    document.getElementById("popSoldat").innerHTML= soldat0.nombre;
    document.getElementById("qtPop").innerHTML = pop;
    updateButton()
    updateRessource()
}   
function plusUnSoldat(x){
    //popSoldat += x;
    soldat0.nombre += x;
    soldat0.pv = soldat0.nombre * 2;
    soldat0.atk = soldat0.nombre * 2;
    console.log(soldat0)
}
function moinUnSoldat(x){
    soldat0.nombre -= x;
    soldat0.pv -= x * 2;
    soldat0.atk -= x * 2;   
    console.log(soldat0)
}
//----------------------------------------------GESTION--------------------------------
function afficherQuestion(){
        document.getElementById("question").style.display = "block";
}
function masquerQuestion(){
        document.getElementById("question").style.display = "none"; 
}
function updateRessource(){
    soldat0.atk = (soldat0.nombre*2)  
    tourelleAuto0.atk = tourelleAuto0.nombre*5
    

    charDeCombat0.atk = charDeCombat0.nombre*10; 
    if (mur <= 0){
        alert("Votre mur est détruit, votre colonie c'est faite démonter !")
        window.location="" ;
        
    }
    if(charDeCombat0.nombre <= 0){
            charDeCombat0.nombre = 0;
    }
       
    if ( mur < murMax){
    document.getElementById("repMur").style.display = "block";    
    }
    else {
    document.getElementById("repMur").style.display = "none";   
    }
    document.getElementById("jour").innerHTML=jour;  
    document.getElementById("qtPop").innerHTML= pop;
    document.getElementById("popOr").innerHTML= popOr;
    document.getElementById("popFer").innerHTML= popFer;
    document.getElementById("popGaz").innerHTML= popGaz;
    document.getElementById("qtOr").innerHTML= or;
    document.getElementById("qtFer").innerHTML= fer;
    document.getElementById("qtGaz").innerHTML= gaz;
    document.getElementById("charDeCombat").innerHTML= charDeCombat0.nombre;
    document.getElementById("tourelleAuto").innerHTML= tourelleAuto0.nombre; 
    document.getElementById("qtSoldat").innerHTML= soldat0.nombre;
    document.getElementById("popMineSoldatMax").innerHTML = popMineSoldatMax;
    document.getElementById("popSoldat").innerHTML = soldat0.nombre;
    document.getElementById("popMineOrMax").innerHTML = popMineOrMax;
    document.getElementById("popMineFerMax").innerHTML = popMineFerMax;
    document.getElementById("popMineGazMax").innerHTML = popMineGazMax;    
    document.getElementById("nombreMineDor").innerHTML = nombreMineDor;
    document.getElementById("nombreMineFer").innerHTML = nombreMineFer;
    document.getElementById("nombreMineGaz").innerHTML = nombreMineGaz;
    document.getElementById("popMax").innerHTML = popMax;
    document.getElementById("mur").innerHTML = mur;
    document.getElementById("murMax").innerHTML = murMax;
    document.getElementById("niveauDeMaison").innerHTML = niveauDeMaison;
    document.getElementById("niveauDeCaserne").innerHTML = niveauDeCaserne;    

}
function randomEvent(x){  
    min = 0;
    max = x;
    randomEventResultat = Math.floor(Math.random() * (max - min)) + min;
}
function newDay(){
        document.getElementById("eventRead").innerHTML="";
        document.getElementById("loot").innerHTML="";
        document.getElementById("fenetre1").innerHTML="";
        document.getElementById("fenetre2").innerHTML="";
}
function valid(){
    updateRessource()
    document.getElementById("minusOr").disabled = true;
    document.getElementById("minusFer").disabled = true;
    document.getElementById("minusGaz").disabled = true;
    document.getElementById("plusSoldat").disabled = true;
    document.getElementById("nextDay").disabled = false;
    document.getElementById("valid").disabled = true;
} 
function ressourceGagne(){
        or += popOr * 2
        fer +=  popFer * 2
        gaz +=  popGaz * 2
        pop += niveauDeMaison
        setTimeout(function(){ updateRessource(); }, 500);
}
function passerUneNuit(){
        attaqueAlien()
        jour += 1;  
        updateRessource()
        document.getElementById("nextDay").disabled = true;    
}
function suivant(){
        
        ressourceGagne()
        newDay()

        document.getElementById("eventRead").innerHTML= "Une nouvelle journée commence, vos colons ont récolter des ressources<br>"+"Vos colons ont miné "+ popOr*2+" d'or, "+popFer*2+" de fer, "+popGaz*2+" de gaz <br>Vos maison niveau "+niveauDeMaison+" vous apporte "
            +niveauDeMaison+" colon par jour !";
        updateButton()
}
function updateAlien(){
    alien0.nombre += 1
    randomEvent(2)
    alien0.nombre += randomEventResultat
    alien0.pv = alien0.nombre += randomEventResultat
    alien0.atk += randomEventResultat 
}
function updatebarChar(){
    degat = (alien0.atk/charDeCombat0.pv) *100;
    var barreCharDeCombat = document.getElementById("barreProgress");
    widthBarreChars -= degat
    barreCharDeCombat.style.width = widthBarreChars +'%';
    console.log("Degat:"+degat)
    console.log(widthBarreChars)
}
function ouiOuNon(x,y){
        button0.removeEventListener('click', x)
        button1.removeEventListener('click', y)
        setTimeout(function(){ suivant() }, 4000);
} 
function gifCombat(){
    randomEvent(17)
    document.getElementById('gif').src = "image/trooper/" + randomEventResultat + ".gif";
    console.log(randomEventResultat)
    setTimeout(function(){    document.getElementById('gif').src = ""; }, 5000);
    
}
//------------------------------------------DEFENSE ATTAQUE---------------------------
function attaqueAlien(){
    gifCombat()
    defenseTourelleAuto()  
    randomEvent(10)
        if(randomEventResultat > 8){
            randomEvent(3)
            mur -= randomEventResultat
            updateRessource()
            document.getElementById("eventRead").innerHTML="Votre mur a subit des dégats, - "+randomEventResultat;
        }
}
function defenseSoldat(){
        document.getElementById("eventRead").innerHTML= "Les aliens vous attaque !" 
                if (alien0.pv <= 0){
                    setTimeout(function(){ document.getElementById("eventRead").innerHTML= "Vous avez résisté à l'assault des aliens !<br>Cependant vous avez perdu des soldats dans la bataille... "; }, 1000);
                    setTimeout(function(){ updateRessource(); }, 4000);                
                    setTimeout(function(){ evenement(); }, 4000);
                    soldat0.nombre = Math.floor(soldat0.pv/2)
                    updateAlien() 
                    console.log(alien0)}
                else {
    while (alien0.pv > 0){
        alien0.pv -= soldat0.atk;
        soldat0.pv -= alien0.atk
                if (soldat0.pv <= 0){
                    alert("Votre colonie c'est faite décimer...")  
                    window.location="" ;
                    break}
               if (alien0.pv <= 0){
                    setTimeout(function(){ document.getElementById("eventRead").innerHTML= "Vous avez résisté à l'assault des aliens !<br>Cependant vous avez perdu des soldats dans la bataille... "; }, 1000);
                    setTimeout(function(){ updateRessource(); }, 4000);                
                    setTimeout(function(){ evenement(); }, 4000);
                    soldat0.nombre = Math.floor(soldat0.pv/2)
                    updateAlien() 
                    console.log(alien0)        
                    break}
    }}}


function defenseCharDecombat(){
    if (charDeCombat0.nombre > 0){
        document.getElementById("pvChar").style.display="block";
        document.getElementById("eventRead").innerHTML= "Les chars prennent le relais !"  
                if (alien0.pv <= 0){
                    setTimeout(function(){ document.getElementById("eventRead").innerHTML= "Vos chars ont résisté à l'assault des aliens !<br> "; }, 1000);
                    setTimeout(function(){ updateRessource(); }, 2000);                
                    setTimeout(function(){ evenement(); }, 3000);
                    updateAlien() }
                else {
    while ( alien0.pv > 0){

            alien0.pv -= charDeCombat0.atk;
            charDeCombat0.pv -= alien0.atk;
            updatebarChar()
                if (charDeCombat0.pv <= 0){
                    document.getElementById("eventRead").innerHTML= "Les aliens vous attaque, vos chars de combat sont détruits<br>Les soldats prennent le relais !" 
                    charDeCombat0.nombre = 0;
                    setTimeout(function(){defenseSoldat() }, 3000);
                    console.log(alien0)
                    break}
                if (alien0.pv <= 0){
                    setTimeout(function(){ document.getElementById("eventRead").innerHTML= "Vos chars ont résisté à l'assault des aliens !<br> "; }, 1000);
                    setTimeout(function(){ updateRessource(); }, 2000);                
                    setTimeout(function(){ evenement(); }, 3000);
                    updateAlien()                
                    break}
        }}}
    else {
        defenseSoldat()
    }}
function defenseTourelleAuto(){
    if (tourelleAuto0.nombre > 0){
        document.getElementById("eventRead").innerHTML= "Les aliens vous attaque ! Les tourelles engage le combat!"    
    while ( alien0.pv > 0){
            alien0.pv -= tourelleAuto0.atk;
            tourelleAuto0.pv -= alien0.atk;
                if (tourelleAuto0.pv <= 0) {
                    document.getElementById("eventRead").innerHTML= "Vos tourelles Auto n'ont pas résisté à l'attaque !"   
                    tourelleAuto0.nombre = 0;
                    tourelleAuto0.pv = 0;
                    setTimeout(function(){defenseCharDecombat() }, 3000);
                    console.log(alien0)
                    break}
                if (alien0.pv <= 0){
                    setTimeout(function(){ document.getElementById("eventRead").innerHTML= "Vos tourelles Autos ont résisté à l'assault des aliens !<br> "; }, 1000);
                    setTimeout(function(){ updateRessource(); }, 2000);                
                    setTimeout(function(){ evenement(); }, 3000);
                    updateAlien()                
                    break}
                
        }}
    else {
        defenseCharDecombat()    
    }}
//------------------------------------------BANQUE DE GIF------------------------------
var gif = []
//------------------------------------------MARKET-------------------------------------
function recrutementColon(){
    if ( or >= 19){
        or -= 20
        pop += 1 
        document.getElementById("eventRead").innerHTML="Vous recrutez un colon, +1 population !";
        setTimeout(function(){document.getElementById("eventRead").innerHTML=""}, 1000); 
        updateRessource()
        updateButton()
    }
    else {
        document.getElementById("eventRead").innerHTML="Vous n'avez pas assez d'or pour recruter un colon ! "; 
        setTimeout(function(){document.getElementById("eventRead").innerHTML=""}, 1000); 
    }
}
function recrutementDesSoldats(){
    if ( or >= 10 && fer >=10 && gaz >= 5 && soldat0.nombre < popMineSoldatMax ){
        plusUnSoldat(1)
        or -=10 
        fer -= 10
        gaz -= 5
        updateRessource()
        document.getElementById("eventRead").innerHTML="Vous recrutez un soldat, +1 soldat !";
        setTimeout(function(){document.getElementById("eventRead").innerHTML=""}, 1000); 
    }
    else {
        document.getElementById("eventRead").innerHTML="Vous n'avez pas assez de ressource pour recruter un soldat ! "; 
        setTimeout(function(){document.getElementById("eventRead").innerHTML=""}, 1000);     
    }
}
function upMinedor(){
    if (or >=50 && fer >=50 ){
        or -= 50
        fer -= 50
        popMineOrMax += 5
        nombreMineDor += 1
        updateRessource()
        updateButton()
    }
    else {
        document.getElementById("eventRead").innerHTML="Vous n'avez pas assez de ressources !"
        setTimeout(function(){document.getElementById("eventRead").innerHTML=""}, 1000);    
    }
}
function upMineFer(){
    if (or >=50 && fer >=50 ){
        or -= 50
        fer -= 50
        popMineFerMax += 5
        nombreMineFer += 1
        updateRessource()
        updateButton()
    }
    else {
        document.getElementById("eventRead").innerHTML="Vous n'avez pas assez de ressources !"
        setTimeout(function(){document.getElementById("eventRead").innerHTML=""}, 1000);
    }
}
function upMineGaz(){
    if (or >=50 && fer >=50 && gaz >= 40){
        or -= 50
        fer -= 50
        popMineGazMax += 5
        nombreMineGaz += 1
        updateRessource()
        updateButton()
    }
    else {
        document.getElementById("eventRead").innerHTML="Vous n'avez pas assez de ressources !"
        setTimeout(function(){document.getElementById("eventRead").innerHTML=""}, 1000);
    }
}
function upMaison(){
    if ( or >= 25 && fer >= 25 && gaz >= 5){
        or -= 25
        fer -= 25
        gaz -= 5
        popMax += 5
        niveauDeMaison += 1
        updateRessource()
        updateButton()
        document.getElementById("eventRead").innerHTML="Votre population max augmente de 5 !"
        setTimeout(function(){document.getElementById("eventRead").innerHTML=""}, 1000);  
    }
    else {
        document.getElementById("eventRead").innerHTML="Vous n'avez pas assez de ressources !"
        setTimeout(function(){document.getElementById("eventRead").innerHTML=""}, 1000);    
    }
}
function upCaserne(){
    if (or >= 200 && fer >= 200 && gaz >= 150){
        or -= 200
        fer -= 200
        gaz -= 150 
        niveauDeCaserne += 1;
        popMineSoldatMax += 10;
        updateRessource
    }
    else {
        document.getElementById("eventRead").innerHTML = "Vous n'avez pas assez de ressources !";
        setTimeout(function(){ document.getElementById("eventRead").innerHTML="" }, 1000);
    }
}
function upMur(){
    if (or >= 300 && fer >= 300 && gaz >= 100 ){
        or -= 300
        fer -= 300
        gaz -= 100
        murMax += 10
        updateRessource
    }
    else {
        document.getElementById("eventRead").innerHTML = "Vous n'avez pas assez de ressources !";
        setTimeout(function(){ document.getElementById("eventRead").innerHTML="" }, 1000);
    }    
}
function upChar(){
    if ( or >= 140 && fer >= 140 && gaz >= 100){
        charDeCombat0.nombre += 1
        charDeCombat0.pv += 10
        or -= 140
        fer -= 140
        gaz -= 100
        updateRessource()
}    
    else{
        document.getElementById("eventRead").innerHTML = "Vous n'avez pas assez de ressources !";
        setTimeout(function(){ document.getElementById("eventRead").innerHTML="" }, 1000);     
    }

}
function upTourelle(){
    if ( or >= 70 && fer >= 70 && gaz >= 50){
        tourelleAuto0.nombre += 1
        tourelleAuto0.pv += 5
        or -= 70
        fer -= 70
        gaz -= 50
        updateRessource()
}    
    else{
        document.getElementById("eventRead").innerHTML = "Vous n'avez pas assez de ressources !";
        setTimeout(function(){ document.getElementById("eventRead").innerHTML="" }, 1000);     
    }

}
function repMur(){
   if (or >= 50 && fer >= 50 && gaz >= 25){
        or -= 50
        fer -= 50
        gaz -= 25
        mur += 2
        updateRessource()
       if (mur > murMax){
           mur = murMax
           updateRessource()
       }
   }
    else {
        document.getElementById("eventRead").innerHTML = "Vous n'avez pas assez de ressource !";
        setTimeout(function(){ document.getElementById("eventRead").innerHTML="" }, 1000); 
    }

}
//------------------------------------------LISTE D'EVENEMENT--------------------------
    var quest0 = ["le fer" , "Des colons ont trouvé des débrits apartenant à une colonis qui n'a pas survécu, vous décidez de fondre le fer ", 
                  "+20fer",
                  20];
    var quest1 = ["Tunning",
                  "Un colons a participé à pimp my ride, vous gagnez un char de combat !" , 
                  " +1 char de combat"];
    var quest2 = ["R2D3",
                  "Un soldat fanatique du combat a transformé son droïde en Terminator!", 
                  "vous gagnez une tourelle auto", 
                  1];
    var quest3 = ["Un groupe de colons partis chercher de la nourriture ont découvert un nouveau fruit",
                  "Les récolter ?", 
                  "Les colons mangent les fruits, du au taux élevé en éthanol les colons sont bourré et travaillent plus vite +10 d'or, +10 de fer, +10 de gaz !",
                  "Les colons continuent de chercher de la nourriture ",
                    10];
    var quest4 = ["Manque de munitions",
                  "Les collons sont en manque de munitions",
                  "Créer des munitions ?",
		          " Vous fabriquez des munitions -10fer. <br>  Un soldat rejoind vos rang !.",
		          "Il n'y a plus assez de munition pour les soldats, un soldat a déserté  -1 soldat"];
    var quest5 = ["Gastro",
                  "Des collons ont contracté un virus, la population souffre de collic, ça ne devrait pas durer éternelement",   
			      "Récolter les escréments ?",
		          "Vous récoltez les escréments et gagnez +20 en GAZ",
		          "Vous vous débarassez des escréments",
                    20]; 

class quest{
  constructor(name,histoire,question, reponse) {
    this.name = name;
    this.histoire = histoire;
    this.question = question;
    this.reponse = reponse; 
  }
}
    var quest6 = new quest("BASTON","Une baguarre a éclaté, il y eu 10 morts ","","Vous perdez 10 colons");   
    var quest7 = ["Mega fête",
                  "Pour les 30ans du colonel moutarde une incroyable fête a vue le jour, la fête ce termine à 3h du matin",
                  "Faire un after ?",
                  "2 personnes sont mortes suite à cette after",
                  "Les soldats sont rentrés chez eu, et quelque soldat on couché ensemble et ont fait des enfants +4 populations"]
    var quest8 = ["De L'or !",
                  "Des colons ont trouvé une cavité spécial dans une mine, tout laisse à prévoir qu'il ne faut pas y entrer",  
			      "Entrer dans la cavité ?",
                  "Vos colons entre dans la cavité et trouve 20 d'or !",
                  "Les soldats continu de miner aux alentour",]
    var quest9 = [ "Rebelion",
	                "Un commandant trouve que vous ne faite pas très bien votre travail, vous avez découvert qu'il organise un complot contre vous.",
                    "Lui arracher les couilles ? cliquer sur Y <br>L'exécuter comme exemple ? Cliquer sur N",
		            "Vous arrachez les couilles du commandant et la foule est en délire +10or",	
                    "Vous l'exécutez -1 soldat"]
    var quest10 = ["Des aliens!",
                   "Des aliens ont passés vos protections", 
                   "Voulez vous sacrifier 10 population ? cliquer sur Y <br>Préférez vous sacrifier 2 soldats pour sauver le peuple ! cliquer sur N",
                   "Vous sacrifiez 10 colons",
                    "Vous sacrifiez 2 soldats"]
    var quest11 = ["POKER", 
                   "Un colon à gagné un tournois de POKER en ligne",
                   "Lui prendre son argent ? Cliquer sur Y<br>Le recruter chez les soldats ? Pas de poker pour le peuple ! Cliquer sur N" ]
    var quest12 = ["Rambo", 
                   "Un soldat enfile un bandeau rouge et part tous seul au front, visiblement... c'était pas sa guerre"
                  ]
    var quest13 = ["Incroyable",
	"Un soleil rouge se lève, beaucoup de sang a du couler cette nuit... Légolas rejoind les rang",
                   "+1 tourelle auto ! LEGOLAAAAS !!!!"	]
    var quest14 = ["Meeting",
	               "La population voudrait organiser un meeting afin de rencontrer l'amour.<br>",
                   "Organiser un meeting?",
		           "Vous organisez un meeting, un soldat trouve l'amour et fait deux enfants   -1 soldat  +2 population",
		           "Vous n'organisez rien , un soldat se suicide -1 soldat"]
    var quest15 = ["Barricade",
	               "Une équipe de survit revient avec des plaques en métal.",
                   "Améliorer les murs ? Cliquer sur Y <br>Faire fondre les plaques ? Cliquer sur N"] 
    var quest16 = ["Folie",
                    "Un de vos citoyens est atteint de crises de folie aigües et s'empare du bazooka d'un soldat assoupi.<br>En tirant sur le mur, on s'aperçoit qu'il y a de l'or caché dans les fondations ..",
                    "Continuer à abattre le 1/4 du mur pour récolter de l'or à gogo? "]
    var quest17 = ["Visite",
"Certains de vos citoyens s'en vont visiter des ruines d'une ancienne ville en Chine, à leur retour certains tombent malade et propagent le Covid-19 à leurs proches.<br>Si vous ne faites rien, la moitié de votre population risque de perdre la vie.",
"Abattre ces enfoirés ?"]

//------------------------------------------RECOMPENCE DE QUETE------------------------- 
function quest3Y(){
        document.getElementById("fenetre2").innerHTML= quest3[2]; 
        or  +=  quest3[4] 
        fer +=  quest3[4]
        gaz +=  quest3[4]
        updateRessource()
        masquerQuestion()
        ouiOuNon(quest3Y,quest3N)

}
function quest3N(){
        document.getElementById("fenetre2").innerHTML= quest3[3]; 
        masquerQuestion()

        ouiOuNon(quest3Y,quest3N)
}

function quest4Y(){
        document.getElementById("fenetre2").innerHTML= quest4[3];
        masquerQuestion()
        plusUnSoldat(1)
        fer -= 10;
        updateRessource()

        ouiOuNon(quest4Y,quest4N)
}
function quest4N(){
        document.getElementById("fenetre2").innerHTML= quest4[4];
        moinUnSoldat(1);
        updateRessource()
        masquerQuestion()

        ouiOuNon(quest4Y,quest4N)    
}

function quest5Y(){
        document.getElementById("fenetre2").innerHTML= quest5[3];
        gaz += quest5[5] 
        updateRessource()
        masquerQuestion()

        ouiOuNon(quest5Y,quest5N)    
}
function quest5N(){
        document.getElementById("fenetre2").innerHTML= quest5[4]; 
        updateRessource()
        masquerQuestion()

        ouiOuNon(quest5Y,quest5N)     
}

function quest7Y(){
        document.getElementById("fenetre2").innerHTML= quest7[3];
        pop -= 2;
        if (pop < 0){
            pop = 0;
        }
        updateRessource()
        masquerQuestion()

        ouiOuNon(quest7Y,quest7N)
}
function quest7N(){
        document.getElementById("fenetre2").innerHTML= quest7[4];
        pop += 4;
        updateRessource()
        masquerQuestion()

        ouiOuNon(quest7Y,quest7N)    
}

function quest8Y(){
        document.getElementById("fenetre2").innerHTML= quest8[3];
        or += 20;
        updateRessource()
        masquerQuestion()

        ouiOuNon(quest8Y,quest8N)
}
function quest8N(){
        document.getElementById("fenetre2").innerHTML= quest8[4];
        updateRessource()
        masquerQuestion()
 
        ouiOuNon(quest8Y,quest8N)      
}

function quest9Y(){
        document.getElementById("fenetre2").innerHTML= quest9[3];
        or += 10;
        updateRessource()
        masquerQuestion()

        ouiOuNon(quest9Y,quest9N)
}
function quest9N(){
        document.getElementById("fenetre2").innerHTML= quest9[4];
        if (soldat0.nombre < 0){
            soldat0.nombre = 0
            soldat0.pv = 0
        document.getElementById("fenetre2").innerHTML= "Vous n'avez plus de soldat à executer";    
        }
        else {
        moinUnSoldat(1)
        updateRessource()
        masquerQuestion()

        }
        ouiOuNon(quest9Y,quest9N)     
       
}

function quest10Y(){
        if (pop <= 0){
        if (popGaz > 0){
        popGaz = 0
        updateRessource()
        document.getElementById("fenetre2").innerHTML= "Vous n'avez plus personne dans la population ! <br>Les aliens sont arrivez jusqu'à la mine de Gaz et ont tués tout les travailleurs";    
        }
            else if ( popFer > 0){
                popFer = 0
                updateRessource()
                document.getElementById("fenetre2").innerHTML= "Vous n'avez plus personne dans la population ! <br>Les aliens sont arrivez jusqu'à la mine de Fer et ont tués touts les travailleurs";    
   
            }
            else if ( popOr > 0){
                popOr = 0
                updateRessource()
                document.getElementById("fenetre2").innerHTML= "Vous n'avez plus personne dans la population ! <br>Les aliens sont arrivez jusqu'à la mine d'or et ont tués touts les travailleurs";    
   
            }
            else if ( soldat0.nombre > 0){
                moinUnSoldat(1)
                updateRessource()
                document.getElementById("fenetre2").innerHTML= "Vous n'avez plus personne dans la population ! <br>Les aliens sont arrivez jusqu'à la mine d'or et ont tués touts les travailleurs";    
   
            }  
        }
        else { 
        document.getElementById("fenetre2").innerHTML= quest10[3];
        pop -= 10}
        updateRessource()
        masquerQuestion()
 
        ouiOuNon(quest10Y,quest10N)
}
function quest10N(){
        if (soldat0.nombre <= 0){
            document.getElementById("fenetre2").innerHTML= "Vous avez de la chance vous ne pouvez pas sacrifier de soldat";
            masquerQuestion()
        
        }
        if  (soldat0.nombre > 2){
            document.getElementById("fenetre2").innerHTML= quest10[4];
            moinUnSoldat(2)
            updateRessource()
            masquerQuestion()
    
           }
        ouiOuNon(quest10Y,quest10N)      
 }

function quest11Y(){
        document.getElementById("fenetre2").innerHTML= "Vous lui prenné son argent ! +20 d'or ";
        or += 20;
        updateRessource()
        masquerQuestion()
        ouiOuNon(quest11Y,quest11N)
        
}
function quest11N(){
        document.getElementById("fenetre2").innerHTML= "Pas de poker pour le peuple ! +1 soldat ";
        plusUnSoldat(1)
        soldat0.pv 
        updateRessource()
        masquerQuestion()
        ouiOuNon(quest11Y,quest11N)
}

function quest14Y(){
        document.getElementById("fenetre2").innerHTML= quest14[3];
        moinUnSoldat(1);
        pop += 2;
        updateRessource()
        masquerQuestion()
        ouiOuNon(quest14Y,quest14N)
        
}
function quest14N(){
        document.getElementById("fenetre2").innerHTML= quest14[4];
        moinUnSoldat(1)
        updateRessource()
        masquerQuestion()
        ouiOuNon(quest14Y,quest14N)    
}

function quest15Y(){
        document.getElementById("fenetre2").innerHTML= "Vous améliorez les murs, mur +1 ";
        murMax += 2;
        mur += 2;
        updateRessource()
        masquerQuestion()
        ouiOuNon(quest14Y,quest14N)
        
}
function quest15N(){
        document.getElementById("fenetre2").innerHTML= "Vous faites fondres les plaques, vous gagnez +20 en fer ";
        fer += 20
        updateRessource()
        masquerQuestion()
        ouiOuNon(quest14Y,quest14N)
}

function quest16Y(){
        randomEvent(5)
        document.getElementById("fenetre2").innerHTML= "Vous défoncez le mur, et trouvez 100 d'or et 100 de pierre !<br> Mur - 2";
        mur -= 2
        or += 100
        fer += 50
        updateRessource()
        masquerQuestion()
        ouiOuNon(quest16Y,quest16N)
        
}
function quest16N(){
        randomEvent(5)
        document.getElementById("fenetre2").innerHTML= "Le mur a pris des dégats et perd "+randomEventResultat;
        mur -= randomEventResultat
        updateRessource()
        masquerQuestion()
        ouiOuNon(quest16Y,quest16N)
}

function quest17Y(){
        document.getElementById("fenetre2").innerHTML= "Vous abattez un peloton d'enfoiré !<br>les citoyens sont rassurés et bossent plus ( Or + 20, Fer + 20, gaz + 10 )";
        Or += 20
        Fer += 20
        gaz += 10
        updateRessource()
        masquerQuestion()
        ouiOuNon(quest16Y,quest16N)
        
}
function quest17N(){
        randomEvent(5)
        document.getElementById("fenetre2").innerHTML= "La population prend chère !<br>Heureusement vous canalisez le virus à temps mais vous perdez "+randomEventResultat+" colons !";
        if (pop > randomEventResultat){pop -= randomEventResultat}
        else { 
            if ( popOr > randomEventResultat){popOr -= randomEventResultat}
            else {  if ( popFer > randomEventResultat){popFer -= randomEventResultat}
                    else {  if ( popGaz > randomEventResultat){popGaz -= randomEventResulta}                                
                            else { if (soldat0.nombre > randomEventResultat){soldat0.nombre -= randomEventResultat}}
                          }
                 }
            
        }
        updateRessource()
        masquerQuestion()
        ouiOuNon(quest16Y,quest16N)
}
document.getElementById("question").style.display = "none"; 

//------------------------------------------GENERATEUR D'EVENEMENT-----------------------
function evenement(){
        document.getElementById("pvChar").style.display ="none"
        randomEvent(14)
    if (randomEventResultat == 0){
        document.getElementById("eventRead").innerHTML= quest0[1]; 
        document.getElementById("loot").innerHTML= quest0[2];
        fer += quest0[3];
        updateRessource()
        ouiOuNon()
    }
    if (randomEventResultat == 1){
        document.getElementById("eventRead").innerHTML= quest1[1];
        document.getElementById("loot").innerHTML= quest1[2];
        charDeCombat0.nombre += 1;
        charDeCombat0.pv += 10
        updateRessource()
        ouiOuNon()
        
    }
    if (randomEventResultat == 2){
        document.getElementById("eventRead").innerHTML= quest2[1];
        document.getElementById("loot").innerHTML= quest2[2];  
        tourelleAuto0.nombre += 1
        tourelleAuto0.pv += 5;
        updateRessource()
        ouiOuNon()
        
    }
    if (randomEventResultat == 3){
        document.getElementById("eventRead").innerHTML= quest3[0];
        document.getElementById("loot").innerHTML= quest3[1];       
        afficherQuestion() 
        button0.addEventListener('click', quest3Y);
        button1.addEventListener('click', quest3N);
    }
//    if (randomEventResultat == 4){
//        evenement()
//        if (fer <= 9){
//            evenement()
//        }
//        if (soldat0.nombre <= 0 ){
//            evenement()
//        }
//        else {       
//            document.getElementById("eventRead").innerHTML= quest4[1];
//            document.getElementById("loot").innerHTML= quest4[2];
//            afficherQuestion(); 
//            button0.addEventListener('click', quest4Y);
//            button1.addEventListener('click', quest4N); }
//    }
    if (randomEventResultat == 4){
        document.getElementById("eventRead").innerHTML= quest5[1];
        document.getElementById("loot").innerHTML= quest5[2];
        afficherQuestion();
        button0.addEventListener('click', quest5Y); 
        button1.addEventListener('click', quest5N); 
    }
    if (randomEventResultat == 5){
        if (pop >= 10 ){
        document.getElementById("eventRead").innerHTML= quest6.histoire;
        document.getElementById("loot").innerHTML= quest6.reponse;
        pop -= 10;
        updateRessource();

        ouiOuNon()            
        }
        else {evenement()}
        }
    if (randomEventResultat == 6){
        if (pop <= 0 ){
            evenement()
        }
        else {
        document.getElementById("eventRead").innerHTML= quest7[1];
        document.getElementById("loot").innerHTML= quest7[2];
        afficherQuestion();
        button0.addEventListener('click', quest7Y);        
        button1.addEventListener('click', quest7N);  
            }
    }
    if (randomEventResultat == 7){
        document.getElementById("eventRead").innerHTML= quest8[1];
        document.getElementById("loot").innerHTML= quest8[2];
        afficherQuestion();
        button0.addEventListener('click', quest8Y);        
        button1.addEventListener('click', quest8N);  
    }
    if (randomEventResultat == 8){
        document.getElementById("eventRead").innerHTML= quest9[1];
        document.getElementById("loot").innerHTML= quest9[2];
        afficherQuestion();
        button0.addEventListener('click', quest9Y);        
        button1.addEventListener('click', quest9N);  
    }
    if (randomEventResultat == 9){
        document.getElementById("eventRead").innerHTML= quest10[1];
        document.getElementById("loot").innerHTML= quest10[2];
        afficherQuestion();
        button0.addEventListener('click', quest10Y);        
        button1.addEventListener('click', quest10N); 
    }
    if (randomEventResultat == 10){
        document.getElementById("eventRead").innerHTML= quest11[1];
        document.getElementById("loot").innerHTML= quest11[2];
        afficherQuestion();
        button0.addEventListener('click', quest11Y);        
        button1.addEventListener('click', quest11N); 
    }
    if (randomEventResultat == 11){
        document.getElementById("eventRead").innerHTML= quest12[1];
        document.getElementById("loot").innerHTML= "Vous perdez un soldat";
        moinUnSoldat(1)
        updateRessource()
        ouiOuNon()    
    } 
    if (randomEventResultat == 12){
        document.getElementById("eventRead").innerHTML= quest13[1];
        document.getElementById("loot").innerHTML= quest13[2];  
        tourelleAuto0.nombre += 1
        updateRessource()
        ouiOuNon()
    }
    if (randomEventResultat == 13){
        document.getElementById("eventRead").innerHTML= quest14[1];
        document.getElementById("loot").innerHTML= quest14[2]; 
        button0.addEventListener('click', quest14Y);        
        button1.addEventListener('click', quest14N);
        afficherQuestion()
    }
    if (randomEventResultat == 14){
        document.getElementById("eventRead").innerHTML= quest15[1];
        document.getElementById("loot").innerHTML= quest15[2]; 
        afficherQuestion()
        button0.addEventListener('click', quest15Y);        
        button1.addEventListener('click', quest15N);
        
    }
    if (randomEventResultat == 15){
        document.getElementById("eventRead").innerHTML= quest16[1];
        document.getElementById("loot").innerHTML= quest16[2]; 
        afficherQuestion()
        button0.addEventListener('click', quest16Y);        
        button1.addEventListener('click', quest16N);
        
    }
        if (randomEventResultat == 16){
        document.getElementById("eventRead").innerHTML= quest17[1];
        document.getElementById("loot").innerHTML= quest17[2]; 
        afficherQuestion()
        button0.addEventListener('click', quest17Y);        
        button1.addEventListener('click', quest17N);
        
    }
}






