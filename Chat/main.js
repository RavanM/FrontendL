function myFunction() {
  if (document.getElementById("msg1").value != "") {

    const parag = document.createElement("p");
    document.getElementById("chat").appendChild(parag);

   parag.innerHTML += "User1: " + document.getElementById("msg1").value;
    document.getElementById("msg1").value = "";

    
  }
}

function myFunction1() {


  if (document.getElementById("msg2").value != "") {

    const parag = document.createElement("p");
    document.getElementById("chat").appendChild(parag);

    parag.innerHTML += "User2: " + document.getElementById("msg2").value;
    document.getElementById("msg2").value = "";
  }
 
}
document.getElementById("clearChat").addEventListener("click", function(){
  document.getElementById("chat").innerHTML = ""
})



