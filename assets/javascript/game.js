$(document).ready(function() {

    //create variables for wins, losses, total score (so far).
    var randomNum;
    var wins = 0;
    var losses = 0;
    var scoreTotal = 0;
    //create variables for each crystal (since they will randomly generate a new value)
    var blueCrystal = 0;
    //play audio


    //create function to start game with random number and write it to the Target Num on the HTML doc
    //randomly generate a new number for each crystal and assign it to "value"
    //console log all the numbers so I don't go crazy testing it out!
    function initializeGame(){
        randomNum = Math.floor((Math.random() * (120-19) + 19));
        $("#targetNum").text(" " + randomNum);
        console.log(randomNum);
        var blueCrystal = Math.floor((Math.random() * 12) +1);
        $("#blueCrystal").attr("value", blueCrystal);
        console.log(blueCrystal);
        var greenCrystal = Math.floor((Math.random() * 12) +1);
        $("#greenCrystal").attr("value", greenCrystal);
        console.log(greenCrystal);
        var pinkCrystal = Math.floor((Math.random() * 12) +1);
        $("#pinkCrystal").attr("value", pinkCrystal);
        console.log(pinkCrystal);
        var purpleCrystal = Math.floor((Math.random() * 12) +1);
        $("#purpleCrystal").attr("value", purpleCrystal);
        console.log(purpleCrystal);
        scoreTotal = 0;
        $("#totalNumber").text(" " + scoreTotal);
        $(".my_audio").trigger('load');
    };
    //run the function
    initializeGame();

    //win Game function
    function winGame() {
        alert("YOU WIN!");
        wins++;
        $("#totalWins").text(" " + wins);
        initializeGame();
    };

    //lose Game function
    function loseGame() {
        alert("YOU LOSE!");
        losses++;
        $("#totalLosses").text(" " + losses);
        initializeGame();
    };


    //If any crystal is clicked, take the value of that crystal
    $(".imgButton").on("click", function() {
        if (scoreTotal >= randomNum) {
            return;
        }
        var crystalValue = $(this).attr("value");
        //turn the value into an integer
        crystalValue = parseInt(crystalValue);
        //add the crystal's value to the score
        scoreTotal += crystalValue;
        //write the score onto the HTML
        $("#totalNumber").text(" " + scoreTotal);
        if (scoreTotal > randomNum) {
            loseGame();
        } else if (scoreTotal === randomNum) {
            winGame();
        }
    });
});