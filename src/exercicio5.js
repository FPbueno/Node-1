entrada = "8,2,5,3,9";
r = entrada.split(",");
for( i = 0 , s = 0 ; i < r.length ; i++){
    c = parseInt(r[i]);
    s = s + c;
}
console.log("Somatório", s);