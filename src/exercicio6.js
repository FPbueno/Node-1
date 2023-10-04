entrada = "8,2,5,3,9";
r = entrada.split(",");
for( i = 0 ; i < r.length ; i++){ 
    c = parseInt(r[i]);
    if(c%2 == 0){
        console.log(c);
    }
}