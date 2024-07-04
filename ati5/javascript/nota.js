var nota1, nota2, nota3, media
nota1=parseFloat(prompt("Escreva sua primeira nota:"))// parsefloat força a leitura do numero 
nota2=parseFloat(prompt("Escreva sua segunda nota:"))
nota3=parseFloat(prompt("Escreva sua terceira nota:"))
media=((nota1+nota2+nota3)/3)
window.alert("sua media foi de "+ media)
if (media >= 6){
    window.alert ("você foi aprovado ")
}
else if (media < 6){
    window.alert ("você foi reprovado")
}
