$(document).ready(function () {
    //Uses Moment.js to display the date and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //added event listener for the save button
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //Adds the time and description to the local storage
        localStorage.setItem(time, text);
    })

    //calls on the local storage for each hour so when the page refreshes your activity is saved
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("hour-13 .description").val(localStorage.getItem("hour-13"));
    $("hour-14 .description").val(localStorage.getItem("hour-14"));
    $("hour-15 .description").val(localStorage.getItem("hour-15"));
    $("hour-16 .description").val(localStorage.getItem("hour-16"));
    $("hour-17 .description").val(localStorage.getItem("hour-17"));

    function hourTracker() {
        //using moment.js again to establish the current hour
        var currentHour = moment().hour();

        $(".time-block").each(function(){
            
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            //apply css theme based on time
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    }
    hourTracker(); //repeats the function 
    setInterval(hourTracker, 15000);
})