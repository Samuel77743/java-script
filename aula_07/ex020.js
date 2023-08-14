console.log("=== INFORME SOBRE OBRIGATORIEDADE DE VOTO POR IDADE ===")

var idade = 65

if(idade < 16){
    console.log("Sem possibilidade de votar")
}

else if(idade < 18 || idade >= 65 ) {
    console.log("Voto opcional")
}

else {
    console.log("Voto obrigatório")
}