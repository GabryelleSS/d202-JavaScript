let notaDaProva = prompt('Qual é a nota do aluno?');

console.log('A nota do aluno é ' + notaDaProva);
console.log(`A nota do aluno é ${notaDaProva}`);

if(Number(notaDaProva) >= 6){
    console.log('Parabéns, o aluno foi aprovado!');
} 
// O laço "else if"não exclui a condição de cima.
else if(notaDaProva >= 5.5){
    alert('Parabéns, você foi aprovado, agradeça o sistema.')
} 
else{
    console.log('Parece que a sua nota foi insuficiente, converse com a cordenação');
}
