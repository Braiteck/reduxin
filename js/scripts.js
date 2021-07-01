$(function(){
	// Видео
	$('.video_block .button').click(function(e){
		e.preventDefault()
		show_video( $(this).parents('.video_block') )
	})


	// Плавный сколл к якорю
	$('.scroll_link').click(function(e){
		e.preventDefault()

		$('.scroll_link').removeClass('active')
		$(this).addClass('active')

		$('html, body').stop().animate({
		   	scrollTop: $( $(this).attr('href') ).offset().top - 115
		}, 500)
	})


	// Прилипший блок
	$('.page_menu').stick_in_parent({
		offset_top: 115
	})


	// Якоря в тексте
	if( $('.text_block .anchor').length ) {
		inView('.text_block .anchor')
		    /*.on('enter', function(el){
		    	var anchorId = $(el).attr('id')

		    	$('.page_menu a[href=#'+ anchorId +']').addClass('active')
		    })*/
		    .on('exit', function(el){
		    	var anchorId = $(el).attr('id')

		    	$('.page_menu a[href=#'+ anchorId +']').removeClass('active')
		    })
	}


	// Табы
	$('.tabs_container').each(function(){
	    $(this).find('.tab_content:first').show()
	})

	$('.tabs li').click(function() {
	    var parentBox = $(this).parents('.tabs_container')

	    $(parentBox).find('.tabs li').removeClass('active')
	    $(this).addClass('active')
	    $(parentBox).find('.tab_content').hide()

	    var activeTab = $(this).find('a').attr('href')
	    $(activeTab).fadeIn()
	    return false
	})


	// Accordion
	$('.text_block .download .item.accordion .item').click(function(e){
		e.preventDefault()

		if( $(this).hasClass('active') ){
			$(this).removeClass('active').next().slideUp(200)
		} else{
			$(this).addClass('active').next().slideDown(300)
		}
	})


	// Моб. меню
    $('.mob_menu_link').click(function(e){
    	e.preventDefault()

		if( $(this).hasClass('active') ){
			$(this).removeClass('active')
        	$('header .menu').fadeOut(200)
		} else{
			$(this).addClass('active')
			$('header .menu').fadeIn(300)
		}
    })


	// Третий и четвёртый блоки
	$('.obesity .img').height( $('.obesity').innerHeight() )
})



$(window).load(function(){
	// Первый и второй блоки
	$('.first_section .img, .first_section .info').css('right', ($(window).width() - $('.cont').width())/2)
	$('.first_section .info').css('margin-bottom', $(window).height() - $('.first_section .info').innerHeight() - $('.first_section .info').offset().top)
	$('.first_section .img').css('top', ($(window).height() - $('.first_section .img').innerHeight() - parseInt($('.first_section .img').css('margin-bottom'))))

	if( $(window).width() > 1023 ) {
		$('.first_section .info').stick_in_parent({
			offset_top: $('.first_section .info').offset().top,
			parent: $('.first_scrolling_bock')
		})

		$('.first_section .img').stick_in_parent({
			offset_top: $('.first_section .img').offset().top,
			parent: $('.first_scrolling_bock')
		})
	}


	// Третий и четвёртый блоки
	if( $(window).width() > 767 ) {
		$('.obesity .img').stick_in_parent({
			offset_top: 0,
			parent: $('.second_scrolling_bock')
		})
	}


	// Стрелка вниз
	$('.scroll_down').click(function(e){
		e.preventDefault()

		$('html, body').stop().animate({
		   	scrollTop: $( $(this).attr('href') ).offset().top - $('header').innerHeight()
		}, 500)
	})


	$('.first_section').onScreen({
		container: window,
		direction: 'vertical',
		doIn: function() {
			$('.scroll_down').attr('href', '.advantages')
		},
		tolerance: 0.5,
		throttle: 0
	})


	$('.advantages').onScreen({
		container: window,
		direction: 'vertical',
		doIn: function() {
			$('.scroll_down').attr('href', '.obesity')
		},
		tolerance: 0.5,
		throttle: 0
	})


	$('.obesity').onScreen({
		container: window,
		direction: 'vertical',
		doIn: function() {
			$('.scroll_down').attr('href', '.at_weight')
		},
		tolerance: 0.5,
		throttle: 0
	})


	$('.at_weight').onScreen({
		container: window,
		direction: 'vertical',
		doIn: function() {
			$('.scroll_down').attr('href', '.perfect_drug')
		},
		tolerance: 0.5,
		throttle: 0
	})


	$('.perfect_drug').onScreen({
		container: window,
		direction: 'vertical',
		doIn: function() {
			$('.scroll_down').attr('href', '.ideal_drug')
		},
		tolerance: 0.5,
		throttle: 0
	})


	$('.ideal_drug').onScreen({
		container: window,
		direction: 'vertical',
		doIn: function() {
			$('.scroll_down').attr('href', '.bottom_block')
		},
		tolerance: 0.5,
		throttle: 0
	})


	$('.bottom_block').onScreen({
		container: window,
		direction: 'vertical',
		doIn: function() {
			$('.scroll_down').hide()
		},
		doOut: function() {
			$('.scroll_down').fadeIn(200)
		},
		tolerance: 0.5,
		throttle: 0
	})


	// Всплывашка
	$.fancybox.open({
		src  : '#warning_modal',
		type : 'inline',
		opts : {
			modal: true,
			speed: 300,
			autoFocus : false
		}
	})

	$('.modal .close').click(function(e) {
		e.preventDefault()

		$.fancybox.close()
	})
})


$(window).load(function(){
	if (navigator.userAgent.indexOf('Mac') > 0) {
		$('html').addClass('macOS')
	}
})


$(window).scroll(function(){
	// Первый и второй блоки
	if( $(window).scrollTop() > 200 ) {
		$('.first_scrolling_bock').addClass('active')
	} else {
		$('.first_scrolling_bock').removeClass('active')
	}
})


$(window).resize(function(){
	// Первый и второй блоки
	$('.first_section .img, .first_section .info').css('right', ($(window).width() - $('.cont').width())/2)
	$('.first_section .info').css('margin-bottom', $(window).height() - $('.first_section .info').innerHeight() - $('.first_section .info').offset().top)
	$('.first_section .img').css('top', ($(window).height() - $('.first_section .img').innerHeight() - parseInt($('.first_section .img').css('margin-bottom'))))
})


// Видео
function show_video (parent) {
	$video_url = parent.find('.button').attr('href')
	$video_url = $video_url.replace("/watch?v=", "/embed/")
	$video_url += "?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1"
	parent.find('iframe').fadeIn(300)
	parent.find('iframe').attr('src', $video_url)
	parent.find('.button').addClass('hide')
}