function colorChange() {
  var hcPossibility = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  
  var hex_code = "";
  
  for (i=0; i<6; i++) {
   var random = Math.floor(Math.random()* hcPossibility.length);
   
   hex_code+= hcPossibility[random];
   
   console.log (hex_code);
  }
  
  document.getElementById("hexCode").innerHTML = "#" + hex_code;
  document.getElementsByTagName("div")[1].style.background = "#" + hex_code;
}

