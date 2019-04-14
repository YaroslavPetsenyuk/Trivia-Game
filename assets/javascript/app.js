$(document).ready(function () {
    $(".info-container", ".end-container").hide();


    var trivia = [
        {
            question: "What is the capital of Ukraine?",
            options: ["Moscow", "Bangkok", "Sacramento", "Kiev"],
            answer: 3
        }
    ]
    // Start the game. Hide start button and show questions
    $("#start").on("click", function () {
        $(this).hide();
        $(".info-container").show();
    });

    var limit = 60;
    $(".clock").on("click", execute);


    function decrement() {
        limit--;
        $(".clock").html(limit);
        if (limit === 0) {
            stop();
            $(".win-lose").html("Game Over")
            showReults();
        }
    }

    function execute() {
        timer = setInterval(decrement, 1000);
    }
    function stop() {
        clearInterval(timer);
    }

    function displayData(data) {
        $("<div class='obj-question'>").text(data.question);
        $("<input type='radio' class='selections'>").text(data.options[0]);
        $("<input type='radio' class='selections'>").text(data.options[1]);
        $("<input type='radio' class='selections'>").text(data.options[2]);
        $("<input type='radio' class='selections'>").text(data.options[3]);
    }


    $(".questions").html(data);