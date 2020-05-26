$(document).ready(function() { 
    
    //Generates random numbers
    var getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    //Generates random number to guess.
    targetNumber = getRandom(2, 119);
    
    //Variables
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var targetNumber = 0;
    
    //Crystal object.
    var crystal = {
        blue:
        {
            name:"blue",
            value: 0
        },
        green:
        {
            name:"green",
            value:0
        },
        red:
        {
            name:"red",
            value:0
        },
        yellow:
        {
            name:"yellow",
            value:0
        }
    };

    //Function to start the game.
    function startGame() {
        targetNumber = getRandom(1, 119);
        crystal.blue.value = getRandom(1, 12);
        crystal.red.value = getRandom(1, 12);
        crystal.green.value = getRandom(1, 12);
        crystal.yellow.value = getRandom(1, 12);
        $("#number-to-guess").text(targetNumber);
        $("#your-score").text(counter);
        updateWinScore();
        updateLossScore();
    }   
    
    //Calling my functions.
    startGame();
    updateWinScore();
    updateLossScore();

    //update win score function.
    function updateWinScore() {
    document.querySelector("#wins").innerHTML = "wins : " + wins;
    }

    //update loss function.
    function updateLossScore() {
    document.querySelector("#losses").innerHTML = "losses :" + losses;
    }

    //Function that adds value to the crystals.
    var addvalue = function(clickedCrystal){
        counter += clickedCrystal.value;
        $("#your-score").text(counter);
        checkWin();
    }

    //Fuction to reset the game after a play.
    function resetGame(){
        counter = 0;
        startGame()
         
    }

    //  MAIN PROCESS
    // ======================================================
    
    //JQUERY ONclick for crystals
    $("#blue").click(function(){ 
        addvalue(crystal.blue);  
    });

    $("#green").click(function(){ 
        addvalue(crystal.green);  
    });

    $("#red").click(function(){ 
        addvalue(crystal.red);  
    });

    $("#yellow").click(function(){ 
        addvalue(crystal.yellow);  
    });
    
    //Function for the Win/loss logic.
    var checkWin = function(){
        if (counter > targetNumber) {
            $("#alert").text("Sorry you lost");
            setTimeout(function() { $("#alert").hide();}, 2000);
            losses++;
            updateLossScore()
            resetGame();    
        }

        else if ( counter === targetNumber) {
            $("#alert").text("Congrats!"); 
            setTimeout(function() { $("#alert").hide();}, 2000);
            wins++;
            updateWinScore()
            resetGame();    
        }
    };
});