var clic = 1;

function mostrar(){ 

   if(clic==1){

   document.getElementById("tabla").style.display = 'block';

   clic = clic + 1;

   } else{

       document.getElementById("tabla").style.display = 'none';

    clic = 1;

   }   

}

function mostrar1(){ 

    if(clic==1){
 
    document.getElementById("tabla1").style.display = 'block';
 
    clic = clic + 1;
 
    } else{
 
        document.getElementById("tabla1").style.display = 'none';
 
     clic = 1;
 
    }   
 
}

function mostrar2(){ 

    if(clic==1){
 
    document.getElementById("tabla2").style.display = 'block';
 
    clic = clic + 1;
 
    } else{
 
        document.getElementById("tabla2").style.display = 'none';
 
     clic = 1;
 
    }   
 
}