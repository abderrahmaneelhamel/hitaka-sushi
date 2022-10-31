
function toggel(){
    var toggel = document.getElementById("toggel");
    toggel.style.display = "flex";
  }
  function toggel0(){
    var toggel = document.getElementById("toggel");
    toggel.style.display = "none";
  }
  function toggel(){
    var toggel = document.getElementById("toggel");
    toggel.style.display = "flex";
  }
  function toggel0(){
    var toggel = document.getElementById("toggel");
    toggel.style.display = "none";
  }
  function picker(){
    var select = document.getElementById("menu").value;
    if(select === "sushi"){
      suship();
    }else if(select === "salade"){
      saladep();
    }else if( select === "soup"){
      soupp();
    }else if(select === "fish"){
      fishp();
    }
  }
  function sushi(){
    var R = document.getElementById("R");
    R.className = "sushiR";
    var sushi = document.getElementById("sushi");
    sushi.style.display = "grid";
    var salade = document.getElementById("salade");
    salade.style.display = "none";
    var soup = document.getElementById("soup");
    soup.style.display = "none";
    var fish = document.getElementById("fish");
    fish.style.display = "none";
  }
  function suship(){
    var sushi = document.getElementById("suship");
    sushi.style.display = "grid";
    var salade = document.getElementById("saladep");
    salade.style.display = "none";
    var soup = document.getElementById("soupp");
    soup.style.display = "none";
    var fish = document.getElementById("fishp");
    fish.style.display = "none";
  }
  function salade(){
    var R = document.getElementById("R");
    R.className = "saladeR";
    var salade = document.getElementById("salade");
    salade.style.display = "grid";
    var sushi = document.getElementById("sushi");
    sushi.style.display = "none";
    var soup = document.getElementById("soup");
    soup.style.display = "none";
    var fish = document.getElementById("fish");
    fish.style.display = "none";
  }
  function saladep(){
    var salade = document.getElementById("saladep");
    salade.style.display = "grid";
    var sushi = document.getElementById("suship");
    sushi.style.display = "none";
    var soup = document.getElementById("soupp");
    soup.style.display = "none";
    var fish = document.getElementById("fishp");
    fish.style.display = "none";
  }
  function soup(){
    var R = document.getElementById("R");
    R.className = "soupR";
    var soup = document.getElementById("soup");
    soup.style.display = "grid";
    var salade = document.getElementById("salade");
    salade.style.display = "none";
    var sushi = document.getElementById("sushi");
    sushi.style.display = "none";
    var fish = document.getElementById("fish");
    fish.style.display = "none";
  }
  function soupp(){
    var soup = document.getElementById("soupp");
    soup.style.display = "grid";
    var salade = document.getElementById("saladep");
    salade.style.display = "none";
    var sushi = document.getElementById("suship");
    sushi.style.display = "none";
    var fish = document.getElementById("fishp");
    fish.style.display = "none";
  }
  function fish(){
    var R = document.getElementById("R");
    R.className = "fishR";
    var fish = document.getElementById("fish");
    fish.style.display = "grid";
    var soup = document.getElementById("soup");
    soup.style.display = "none";
    var salade = document.getElementById("salade");
    salade.style.display = "none";
    var sushi = document.getElementById("sushi");
    sushi.style.display = "none";
  }    
  function fishp(){
    var fish = document.getElementById("fishp");
    fish.style.display = "grid";
    var soup = document.getElementById("soupp");
    soup.style.display = "none";
    var salade = document.getElementById("saladep");
    salade.style.display = "none";
    var sushi = document.getElementById("suship");
    sushi.style.display = "none";
  } 

  function order(){
    alert(" Thank you for buying from Hitaka Shushi \n your order is confirmed");
  }

function Create2DArray(rows,columns) {
    var x = new Array(rows);
    for (var i = 0; i < rows; i++) {
        x[i] = new Array(columns);
    }
    return x;
 }
 var arr = Create2DArray(60,60);
  arr[0][0]="maki-zushi";
  arr[0][1]=99;
  arr[1][0]="sushi rolls";
  arr[1][1]=99;
  arr[2][0]="maki-zushi";
  arr[2][1]=99;
  arr[3][0]="sushi rolls";
  arr[3][1]=99;
  arr[4][0]="maki-zushi";
  arr[4][1]=99;
  arr[5][0]="sushi rolls";
  arr[5][1]=99;
  arr[6][0]="maki-zushi";
  arr[6][1]=99;
  arr[7][0]="sushi rolls";
  arr[7][1]=99;
  arr[8][0]="maki-zushi";
  arr[8][1]=99;
  arr[9][0]="wakame";
  arr[9][1]=79;
  arr[10][0]="chuca";
  arr[10][1]=79;
  arr[11][0]="wakame";
  arr[11][1]=79;
  arr[12][0]="chuca";
  arr[12][1]=79;
  arr[13][0]="wakame";
  arr[13][1]=79;
  arr[14][0]="chuca";
  arr[14][1]=79;
  arr[15][0]="wakame";
  arr[15][1]=79;
  arr[16][0]="chuca";
  arr[16][1]=79;
  arr[17][0]="wakatai";
  arr[17][1]=89;
  arr[18][0]="noodle";
  arr[18][1]=89;
  arr[19][0]="wakatai";
  arr[19][1]=89;
  arr[20][0]="noodle";
  arr[20][1]=89;
  arr[21][0]="wakatai";
  arr[21][1]=89;
  arr[22][0]="noodle";
  arr[22][1]=89;
  arr[23][0]="wakatai";
  arr[23][1]=89;
  arr[24][0]="noodle";
  arr[24][1]=89;
  arr[25][0]="tuna";
  arr[25][1]=199;
  arr[26][0]="momoki";
  arr[26][1]=199;
  arr[27][0]="tuna";
  arr[27][1]=199;
  arr[28][0]="momoki";
  arr[28][1]=199;
  arr[29][0]="tuna";
  arr[29][1]=199;
  arr[30][0]="momoki";
  arr[30][1]=199;
  arr[31][0]="tuna";
  arr[31][1]=199;
  arr[32][0]="momoki";
  arr[32][1]=199;

arr.splice(8,1);

var total = 0;

function buy(i){
    var name = arr[i][0];
    var price = arr[i][1];
    var x = document.getElementById("bill");
    var p = document.createElement("span");
    x.append(p);
    p.innerText = name + " " + price + "$";
    total += price;
    var t = document.getElementById("total");
    t.innerText = total + "$";
    var t0 = document.getElementById("total0");
    t0.innerText = total + "$";
}  
function display(){
    var b = document.querySelector(".bascket"); 
    b.style.display = "flex";
    var c = document.querySelector("#bascket");
    c.style.display = "none";
}
function display0(){
    var b = document.querySelector(".bascket"); 
    b.style.display = "none";
    var c = document.querySelector("#bascket");
    c.style.display = "grid";
}