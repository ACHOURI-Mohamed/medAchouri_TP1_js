
function generateRandomInt(difficulty ){
    let min=0 ,  max;
    switch (difficulty) {
        case "Facile":
            max=5;
            break;
        case "Intermediaire":
            max=10;
            break;
        case "Difficile" :
            max=20;
            break;
        default: max=7;

    }
    return Math.floor(Math.random() * (max - min+1)) + min;
}


function play(difficulty,tentative){
    let generatedRandomInt=generateRandomInt(difficulty);
    let essai;


    if (difficulty==="Facile"){
         essai=window.prompt(`guess a number between 0 and 5. hint: la réponse est ${generatedRandomInt}.  tu as ${tentative} tentative(s) restante(s)`);
    }
    else if (difficulty==="Intermediaire"){
        essai=window.prompt(`guess a number between 0 and 10. hint: la réponse est ${generatedRandomInt}.  tu as ${tentative} tentative(s) restatante(s) `);

    }
    else{
        essai=window.prompt(`guess a number between 0 and 20. hint: la réponse est ${generatedRandomInt}.  tu as ${tentative} tentative(s) restante(s)`);
    }



    if (parseInt(essai)===generatedRandomInt) {
            window.alert("BRAVO");
            return 1;
    }
    else if (parseInt(essai)!==generatedRandomInt) {
        window.alert(`Oops c faux le nombre correcte ${generatedRandomInt}`);
        return 0;
    }
}
function startGame() {
    window.alert(`Hello, ravi de te voir! On commence la partie`);
    const difficulty=window.prompt(' choisir la degré de difficulté:   Facile,    Intermediaire,  Difficile');
    let tentative;
    switch (difficulty) {
        case "Facile":
            tentative=2;
            break;
        case "Intermediaire":
            tentative=3;
            break;
        case "Difficile":
            tentative=4;
            break;
        default:
            tentative=2;
    }

    let remainingAttempts=tentative;
    let success=0;
    let x;
    for(let i = 0; i < tentative;i++){
        x= play(difficulty,remainingAttempts);
        remainingAttempts--;
        success= (x===1)?success+1:success;
    }

    let start;
    if (success!==tentative){
       start= window.prompt(` tu as gagné ${success} fois ! You are a LOSER!!! voulez vous recommencer (o/n)?`);
    }
    else if (success===tentative){
        start= window.prompt(`Tu as gagné ${success} fois ! CONGRATS!!!! Tu as gagné la partie! voulez vous recommencer (o/n)?`);
    }
    switch (start) {
        case 'o':
            startGame();
            break;
        case 'n':
            window.alert("Au revoir!!!");
            break;
        default:
            window.alert(`Au revoir!!!`);

}


}

startGame();