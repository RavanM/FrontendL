
var p = document.getElementsByTagName("p");
p[0].style.color ="red";
p[1].style.color ="green";
p[2].style.color ="brown";
var ededler= [122,5,6,12,345,6723,45];
var kicikEded=ededler[0];
ededler.forEach(element => {
   if(element<kicikEded){
        kicikEded=element
    }
});
console.log(kicikEded)


var ar=[5,2,42,65,75,23,65,76];
var hasil=1;
var cem=0;
ar.forEach(element => {
    hasil*=element;
    cem+=element;
});
console.log(hasil)
console.log(cem)
console.log(hasil/cem);

var tt="salam"
for (var i=0;i<=tt.length-1;i++) {
    console.log(tt[i])
    
}



function Seton(element) {
        
    element.style.filter = "blur()";
 
} 
function Setoff(element) {
        
    element.style.filter = "blur(7px)";
 
} 

function ss() {
    alert("salam")
}
ss()
