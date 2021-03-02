
//Get button element
var button = document.getElementById("button");

//add eventListener
button.addEventListener("click", function(e){

    e.preventDefault();
   
    var inputs = document.getElementById("form").elements;

    for (i = 0; i < inputs.length; i++) {

        if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
  
          if(inputs[i].value === ""){
            
            inputs[i].classList.add("icon-alert-validation");

            document.getElementById(inputs[i].id + "_alert").style.display = "block";
            
          }else{

            inputs[i].classList.remove("icon-alert-validation");

            document.getElementById(inputs[i].id + "_alert").style.display = "none";

          }

        }

      }   

})



