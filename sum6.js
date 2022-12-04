// Description

        // You are given two numbers n and m, you need to check if cube of n is greater than square of m.

//Output : false

        

function cubeAndSquare(n,m) {
   
    var cube_n = n*n*n;
    var square_m = m*m;

    console.log(cube_n > square_m);
  
}

var n =2;
var m =3;
cubeAndSquare(n,m)
