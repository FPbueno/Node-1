entrada = "8,2,3,5,9";
r = entrada.split(",");
for( i = 0 ; i < r.length ; i+= 2){
    console.log(parseInt(r[i]));
}