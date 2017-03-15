function romanize(number){
  var roms = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
  roman = '',
   inputnumber;
  for (inputnumber in roms ){
    while ( number >= roms[inputnumber]){
      roman += inputnumber;
      number -= roms[inputnumber];
    }
  };
  return roman
}
$(document).ready(function() {
    $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var inputnumber =$("input#roman-number").val();
    var result= romanize(inputnumber);
    $("#result").text(result);
    });

});
