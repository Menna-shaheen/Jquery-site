///<reference types="../@types/jquery" />

//nav side
$('.close').on('click', function () {
    console.log('hello');
    $('.side-nav').animate({ width: '0%' }, 1000)
    $('.nav-toggle').animate({ marginLeft: '0%' }, 1000)


})

$('.nav-toggle').on('click', function () {
    $('.side-nav').animate({ width: '20%' }, 1000)
    $('.nav-toggle').animate({ marginLeft: '21%' }, 1000)


})
/*scrollmenu*/
$(".side-nav a").on('click', function () {

    var sectionId = $(this).attr("href");

    var positionOfSection = $(sectionId).offset().top;

    $("html , body").animate({ scrollTop: positionOfSection }, 1000);

})

// details
$('h3').on('click', function () {
    $(this).next().slideToggle(500)
    $('.inner').not($(this).next()).slideUp(500)
})

//counter
function makeTimer() {

    var endTime = new Date("1 Augast 2024 11:59:00 ");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $(".days").html(days + ' D');
    $(".hours").html(hours + ' h');
    $(".minutes").html(minutes + ' m');
    $(".seconds").html(seconds + ' s');

}

setInterval(function () { makeTimer(); }, 1000);
//message
var maxLength = 100;
$('textarea').on('keyup' , function () {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
        $(".msg").text("your available character finished");

    }
    else {

        $(".msg").text(AmountLeft);
    }
});
