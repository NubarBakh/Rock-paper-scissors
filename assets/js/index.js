let rock= document.querySelector('.Rock');
let paper=document.querySelector('.Paper');
let scissors= document.querySelector('.Scissors');
let reset= document.querySelector(".reset")
let jsScore=document.querySelector('.js-score');
let jsResult=document.querySelector('.js-result');
let jsMove= document.querySelector('.js-move')

let score ={
    wins : 0,
    losses:0,
    ties :0
   
}


updateScore();




function pickComputerMove (){
    let computerMove ='';
    let randomNumber= Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3) 
            {computerMove ='rock';}
        
        else if(randomNumber >= 1/3 && randomNumber < 2/3)
            {computerMove ='paper';}

        else if(randomNumber >= 2/3 && randomNumber < 3/3)
            {computerMove ='scissors';};
    
    return computerMove;
};

function playGame(playerMove){
    let computerMove =pickComputerMove ()

    let currentScore =JSON.parse(localStorage.getItem('score'))

    if (!currentScore){
       score={ wins:0,
        losses:0,
        ties:0}
    }

    let result ='';

    if(playerMove==='rock'){
        if(computerMove==='rock'){result ='Tie.'}
        else if(computerMove==='paper'){result='You lose.'}
        else if(computerMove==='scissors'){result='You win.'}

    }
    else if (playerMove==='paper'){
        if(computerMove==='rock'){result ='You win.'}
        else if(computerMove==='paper'){result='Tie.'}
        else if(computerMove==='scissors'){result='You lose.'}

    }
    else if (playerMove==='scissors'){
        if(computerMove==='rock'){result ='You lose.'}
        else if(computerMove==='paper'){result='You win.'}
        else if(computerMove==='scissors'){result='Tie.'}

    }



 if(result ==='You lose.'){
        score.losses+=1}
        else if(result==='You win.'){
        score.wins+=1}
        else if(result==='Tie.'){
            score.ties+=1
        }



        localStorage.setItem('score',JSON.stringify(score))
    
        updateScore();
      
        jsResult.innerHTML= result;
        jsMove.innerHTML=`You
        <img src="./assets/img/${playerMove}-emoji.png" alt="">
        <img src="./assets/img/${computerMove}-emoji.png" alt="">
       
        Computer`
       
   
}


function updateScore(){
    jsScore.innerHTML=`Wins: ${score.wins}, Losses:${score.losses}, Ties: ${score.ties}`
}



reset.addEventListener('click',function(){

    score.wins =0;
    score.losses=0;
    score.ties=0
    localStorage.removeItem('score');
    updateScore();
})

rock.addEventListener('click', function(){
   playGame('rock')       
})


paper.addEventListener('click', function(){
    playGame('paper')  
})

scissors.addEventListener('click', function(){
    playGame('scissors')  
})

