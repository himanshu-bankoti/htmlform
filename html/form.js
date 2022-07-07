
function check(){ 
    var resume =document.getElementById("resume").value 
if(resume==="")  
 {
     document.getElementById("resume").style.backgroundColor="red";
 }
 else{
     document.getElementById("resume").style.backgroundColor="white";
   } 

    var mobile =document.getElementById("mobile").value 
   if(mobile==="")  
    {
        document.getElementById("mobile").style.borderColor="red";
    }
    else{
        document.getElementById("mobile").style.borderColor="silver";
      } 
   
    var name =document.getElementById("name").value 
   if(name==="")  
    {
        document.getElementById("name").style.borderColor="red";
    }
    else{
        document.getElementById("name").style.borderColor="silver";
      } 

    var email =document.getElementById("email").value 
    if(email==="")  
     {
         document.getElementById("email").style.borderColor="red";
     }
     else{
        document.getElementById("email").style.borderColor="silver";
      } 
    
     var dob =document.getElementById("dob").value 
     if(dob==="")  
      {
          document.getElementById("dob").style.borderColor="red";
      }
      else{
        document.getElementById("dob").style.borderColor="silver";
      } 
     
}