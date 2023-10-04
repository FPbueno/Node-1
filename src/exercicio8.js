entrada = "8,2,3,5,9";
r = entrada.split(",");
for( i = 0, s = 0 ; i < r.length ; i+= 2){
    c = parseInt(r[i]);
    s = s + c
}
console.log("Somatório", s)