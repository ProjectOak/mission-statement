$(document).ready(function () {
	$(".nav-body").hide();
	$(".download").hide();
	$(".mssShow").hide();
	$(".step-inner:nth-child(2), .step-inner:nth-child(3)").addClass("tag-inctv");
	$('.post').click(function () {
		var post = this;
    $(this).find('.mssShow').slideToggle(400, function () {
      $('.post').not(post).slideToggle(200);
      $('.button').text(function () {
        return $(this).prev().is(":visible") ? "Choose another statement" : "Choose this statement";
      });
    });
    $('.step-one').toggleClass("step-active");
    var idString = $(this).attr("id");
    var stepActive = $('.step-one').hasClass('step-active');
    $('.step-one').text(function () {
      if (stepActive) {
        $(".nav-body").slideToggle(200);
        $(".download").slideToggle(200);
        $('.step-switch').removeClass('tag-inctv');
        return (idString);
      } else {
        $(".nav-body").slideToggle(200);
        $(".download").slideToggle(200);
        $('.step-switch').addClass('tag-inctv');
        $('.tags').removeClass('tags-selected');
        $('span').removeClass('fadeout');
        $('.step-two').replaceWith('<p class="par step-two">Choose some tags</p>');
        $('.download').removeClass('step-active');
        $('.download').hide();
        return 'Choose a statement';
      }
    });
	});
	
	$(".tags").click(function () {
    var tagId = $(this).attr("id");
    $("." + tagId).toggleClass("fadeout");
    $(this).toggleClass("tags-selected");
    if ($('.tags').hasClass('tags-selected')) {
      $('.step-two').addClass("step-active");
      $('.download').addClass("step-active");
      $('.step-switch-down').removeClass('tag-inctv');
    } else {
      $('.step-two').removeClass("step-active");
      $('.download').removeClass("step-active");
      $('.step-switch-down').addClass('tag-inctv');
    }
    var tagLength = $('.tags-selected').length;
    $('.step-two').text(function () {
      if (tagLength >= 1) {
        return (tagLength);
      } else {
        return 'Choose some tags';
      }
    });
	});

	$(".download").click(function () {
    if ($('.tags').hasClass('tags-selected')) {
      alert('Your file is being donwloaded!');
    } else {
      return false;
    }
	});
});







