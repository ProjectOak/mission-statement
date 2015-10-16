// - - - - - - - - - - - TAGS AND NAV STEPS
$(".tags").click(function() {
    var tagId = $(this).attr("id");
    $("." + tagId).toggleClass("half-opq");

    $(this).toggleClass("tags-selected");
    $(this).children(".fa").toggleClass("rotate45");
        if ($('.tags').hasClass('tags-selected')) {
            $('.stepSwitchDown').removeClass('tag-inctv');
            $('.stepTwo').addClass("stepActive");
        }
        else {
            $('.stepSwitchDown').addClass('tag-inctv');
            $('.stepTwo').removeClass("stepActive");
        }

    var tagToggle = $('.tags.tags-selected').length;
    $('.stepTwo').text(function() {
        if ($('.tags.tags-selected').length >= 1) {
            return (tagToggle);
        }
        else {
            return 'Choose your company\'s tags';
        }
    });
});

// - - - - - - - - - - - MAIN/MISSIONS AND NAV STEPS
$(".nav-body").hide();
$('.post').click(function() {
    $('.post').not(this).slideToggle(600);

    var firstThis = $(this);
    $(this).children('.mssShow').slideToggle(800, function() {
        $('.par-hover').text(function () {
            return $(this).prev().is(":visible") ? "Choose another statement" : "Choose this statement";
        });
    });
    
    $('.stepOne').toggleClass("stepActive");
    var idString = $(firstThis).attr("id");
    var stepActive = $('.stepOne').hasClass('stepActive');
    $('.stepOne').text(function () {
        if (stepActive) {
            $(".nav-mobile").children(".fa").toggleClass("rotate180");
            $(".nav-body").slideToggle(500);
            $('.stepSwitch').removeClass('tag-inctv');
            return (idString);
        }
        else {
            $(".nav-mobile").children(".fa").toggleClass("rotate180");
            $(".nav-body").slideToggle(500);
            $('.stepSwitch').addClass('tag-inctv');
            $('.stepSwitchDown').addClass('tag-inctv');
            $('.tags').removeClass('tags-selected');
            $('span').removeClass('half-opq');
            $('.stepTwo').replaceWith('<p class="par stepTwo">Choose your company\'s tags</p>');
            return 'Choose your company\'s statement';
        }
    });
});

// - - - - - - - - - - - EXPAND MOBILE NAVIGATION
$(".nav-mobile").click(function() {
    $(".nav-mobile").children(".fa").toggleClass("rotate180");
    $(".nav-body").slideToggle(500);
});

// - - - - - - - - - - - EXPAND MOBILE NAVIGATION
$(".fa-download").click(function() {
    alert('Your file is being donwloaded!');
});




