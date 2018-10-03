$(document).ready(function () {
    $('#submit').click(function (event) {
        event.preventDefault();
        $('.calc__overlay').fadeIn(400,
            function () {
                $('.calc__modal')
                    .css('display', 'block')
                    .animate({ opacity: 1 }, 200);
            });
    });

    $('.calc__close, .calc__overlay').click(function () {
        $('.calc__modal')
            .animate({ opacity: 0 }, 200,
                function () {
                    $(this).css('display', 'none');
                    $('.calc__overlay').fadeOut(400);
                }
            );
    });

    $("#calc__sum, #calc__time").keyup(function (event) {
        calc();
    });

    calc();
});

function calc() {

    var sum = parseInt(document.getElementById("calc__sum").value);
    var time = parseInt(document.getElementById("calc__time").value);
    const percent = 10.9 / 1200;
    
    var k = percent * Math.pow(1 + percent, time) / (Math.pow(1 + percent, time) - 1);
    var payment = k * sum;
    payment = Math.round(payment);

    document.getElementById("calc__payment").innerHTML = payment;
    document.getElementById('sum').value = sum;
    document.getElementById('time').value = time;
    document.getElementById('payment').value = payment;

}
