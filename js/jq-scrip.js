$(document).ready(function(){
    $('.toggle-bt').click(function(){
        $('toggle-bt').toggleClass('toggled');
        $('.header-2 nav ul').toggleClass('toggled');
    })
})