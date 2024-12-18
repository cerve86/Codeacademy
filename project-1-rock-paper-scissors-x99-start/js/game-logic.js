let playerOneMoveOneType = undefined;
let playerOneMoveOneValue = undefined;

let playerTwoMoveOneType = undefined;
let playerTwoMoveOneValue = undefined;

let playerOneMoveTwoType = undefined;
let playerOneMoveTwoValue = undefined;

let playerTwoMoveTwoType = undefined;
let playerTwoMoveTwoValue = undefined;

let playerOneMoveThreeType = undefined;
let playerOneMoveThreeValue = undefined;

let playerTwoMoveThreeType = undefined;
let playerTwoMoveThreeValue = undefined;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){

    if (moveOneType && moveOneValue && moveTwoType && moveTwoValue && moveThreeType && moveThreeValue){
        if (player == 'Player One'){

            playerOneMoveOneType = moveOneType;
            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveThreeValue = moveThreeValue;
        
        } else {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveThreeValue = moveThreeValue;
        }
    }

}

function getRoundWinner(round){

    if (round == '1'){
        if (playerOneMoveOneType == 'Paper' && playerTwoMoveOneType == 'Paper'){
            if(playerOneMoveOneValue > playerTwoMoveOneValue){
                return 'Player One';
            } if (playerOneMoveOneValue == playerTwoMoveOneValue){
                return 'Tie';
            } else return 'Player Two';
        }
    } else if (round == '2'){
        if (playerOneMoveTwoType == 'Paper' && playerTwoMoveTwoType == 'Paper'){
            if(playerOneMoveTwoValue > playerTwoMoveTwoValue){
                return 'Player One';
            } if (playerOneMoveTwoValue == playerTwoMoveTwoValue){
                return 'Tie';
            } else return 'Player Two';
        }
    } else if (round == '3'){
        if (playerOneMoveThreeType == 'Paper' && playerTwoMoveThreeType == 'Paper'){
            if(playerOneMoveThreeValue > playerTwoMoveThreeValue){
                return 'Player One';
            } if (playerOneMoveThreeValue == playerTwoMoveThreeValue){
                return 'Tie';
            } else return 'Player Two';
        }
    }
    
}

function getGameWinner(){
    let roundOne = getRoundWinner(1);
    let roundTwo = getRoundWinner(2);
    let roundThree = getRoundWinner(3);

    let playerOneScore = 0;
    let playerTwoScore = 0;

for (i=1; i<4; i++){
    if (getRoundWinner(i) == 'Player One'){
        playerOneScore += 1;
    } else if (getRoundWinner(i) == 'Player Two'){   
        playerTwoScore += 1;
    }
}
if (playerOneScore > playerTwoScore){
    return 'PlayerOne';
} else if (playerTwoScore > playerOneScore) {
    return 'PlayerTwo';
} else return 'Tied';

}