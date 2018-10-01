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
});