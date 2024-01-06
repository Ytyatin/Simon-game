$(document).keypress(function (event) {

    if (event.key == "a" || event.key == "A") {

        function animation(colo) {
            $("." + colo).addClass("pressed");
            setTimeout(function () {
                $("." + colo).removeClass("pressed");
            }, 100);

        }

        function check(col) {

            animation(col);

            var audio = new Audio("sounds/" + col + ".mp3");
            audio.play();

        }
        var comp1Arr = ["green", "red", "yellow", "blue"];
        var comp2Arr = [];

        for (let i = 0; i < 3; i++) {


            $("h1").text("Level " + (i + 1));
            var randNumber = Math.floor(Math.random() * 4);
            var colour2 = comp1Arr[randNumber];

            comp2Arr.push(colour2);
            check(colour2);

            
            for (let j = 0; j <= i; j++) {
                var menArr = [];
                // $("h1").text("Click on any Box to Start");

                $(".btn").on("click", function () {
                    // console.log(this.classList[1]);
                    var colour1 = this.classList[1];
                    menArr.push(colour1);
                    console.log(menArr);
                    check(colour1);
                });
                if (comp2Arr[i] !== menArr[j]) {
                    $("h1").text("Click A to Restart");
                    var audio = new Audio("sounds/wrong.mp3");
                    audio.play();

                }


            }
        }

    }
});
