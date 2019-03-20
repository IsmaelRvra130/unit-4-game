<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">

    $(document).ready(function() { 
    //Generates random number between 1-120.
        var targetNumber = Math.floor(Math.random() * 119) + 1;
        var numberOptions = Math.floor(Math.random() * 11) + 1;
        var lockGame = false;
        $("#number-to-guess").text(targetNumber);
    
        var wins = 0; // variables.
        var losses = 0;
        var counter = 0;
        var numberOptions = [];
    //var winDiv = document.getElementById ("#wins");
	//var loseDiv = document.getElementById ("#losses");


    
        //Loop for the 4 crystals and their value.
    for (var i = 0; i < 4; i++) {
        addCrystalNum();
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjkn0OaLDc9w9qlVH5FRNgevIXPC71hJFIAJ-OOY5b_hDtn3u");
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $(".crystal-img").append(imageCrystal);


        /*if (i=0) {
            <img width="125px" height="125px" src= "">
        }
        else if (i=1) {
            <img width="125px" height="125px" src= "">
        }
        else if (i=2) {
            <img width="125px" height="125px" src= "">
        }
        else if (i=3) {
            <img width="125px" height="125px" src= "">
        }
        else {
            alert("image error");
        }
        */
        console.log(numberOptions);
        }
        //Randomly generates the value of each crystal after each gameplay.
        function addCrystalNum(){
            var newNum = Math.floor(Math.random() * 11) + 1;
        if (numberOptions.includes(newNum)){
            var notUsedNum = newNum + 1;
            numberOptions.push(notUsedNum);
        }
        else {
            numberOptions.push(newNum);
        }
    }
        //Function for the clicks of the crystals.
    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        alert("New score: " + counter);


        if (counter === targetNumber) {
         alert("You win!");
         //resetGame()
         wins ++;
         //updateWinScore();
         resetGame();
        }
         else if (counter > targetNumber) {
        alert("You lose!!");
        //resetGame()
        losses ++;
        //updateLossScore();
        resetGame();
        }

        updateWinScore();
        updateLossScore();


        function updateWinScore() {
        document.querySelector("#wins").innerHTML = "wins : " + wins;
        //resetGame();
        }

        function updateLossScore() {
        document.querySelector("#losses").innerHTML = "losses :" + losses;
        }

        function resetGame() {
        location.reset();
        updateWinScore();
        updateLossScore();
        var targetNumber = Math.floor(Math.random() * 119) + 1;
        var numberOptions = Math.floor(Math.random() * 11) + 1;
        //location.reload();
        //targetNumber = String.fromCharCode(crystalValue);    
	    }



        //Conditions for win or loose.
        //if (counter === targetNumber) {
         //alert("You win!");
         //wins ++;
         //updateScore();
         //resetGame();
        //}
        //else if (counter >= targetNumber) {
        //alert("You lose!!");
        //losses ++;
        //updateScore();
        //resetGame();
       // }   
    });
});

    </script>  