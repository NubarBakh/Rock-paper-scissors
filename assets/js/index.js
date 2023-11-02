let rock= document.querySelector('.Rock');
let paper=document.querySelector('.Paper');
let scissors= document.querySelector('.Scissors');



rock.addEventListener('click', function(){
    let randomNumber= Math.random();
    let computerMove ='';
    if(randomNumber >= 0 && randomNumber < 1/3) 
            {computerMove ='rock';}
        
        else if(randomNumber >= 1/3 && randomNumber < 2/3)
            {computerMove ='paper';}

        else if(randomNumber >= 2/3 && randomNumber < 3/3)
            {computerMove ='scissors';};


    let result ='';
    if(computerMove==='rock'){result ='Tie.'}
    else if(computerMove==='paper'){result='You lose.'}
    else if(computerMove==='scissors'){result='You win.'}

            alert (`You picked rock. Computer picked ${computerMove}. ${result} `)


})




paper.addEventListener('click', function(){
    let randomNumber= Math.random();
    let computerMove ='';
    if(randomNumber >= 0 && randomNumber < 1/3) 
            {computerMove ='rock';}
        
        else if(randomNumber >= 1/3 && randomNumber < 2/3)
            {computerMove ='paper';}

        else if(randomNumber >= 2/3 && randomNumber < 3/3)
            {computerMove ='scissors';};


    let result ='';
    if(computerMove==='rock'){result ='You win.'}
    else if(computerMove==='paper'){result='Tie.'}
    else if(computerMove==='scissors'){result='You lose.'}

            alert (`You picked paper. Computer picked ${computerMove}. ${result} `)


})

scissors.addEventListener('click', function(){
    let randomNumber= Math.random();
    let computerMove ='';
    if(randomNumber >= 0 && randomNumber < 1/3) 
            {computerMove ='rock';}
        
        else if(randomNumber >= 1/3 && randomNumber < 2/3)
            {computerMove ='paper';}

        else if(randomNumber >= 2/3 && randomNumber < 3/3)
            {computerMove ='scissors';};


    let result ='';
    if(computerMove==='rock'){result ='You lose.'}
    else if(computerMove==='paper'){result='You win.'}
    else if(computerMove==='scissors'){result='Tie.'}

            alert (`You picked scissors. Computer picked ${computerMove}. ${result} `)


})

