var nome
nome=window.prompt("Escreva seu nome:")
var dia
dia=parseFloat(prompt("Escreva o dia :"))
var mes
mes=parseFloat(prompt("Escreva o mês :"))

if (nome== "Celso portiolli" || nome=='Celso' && dia == '11' && mes =='9'){
    window.alert("O Celso Portiolli não tem nada a ver com o 11 de Setembro")
}
else if(nome=="kelvin"&& dia == '4'&& mes =='7'){
    window.alert("faça a prova com atenção")
}
else{
    window.alert("Seu acesso foi bloqueado ")
}
