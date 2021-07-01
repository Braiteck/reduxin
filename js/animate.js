$(function(){
	if( $(window).width() > 1023 ){
		inView.offset(200)

		if( $(window).width() > 1600 ){
			inView.offset(300)
		}

		if( $('.first_section').length ) {
			inView('.first_section')
			    .on('enter', function(el){
			    	$('.scroll_down').addClass('active')

			    	setTimeout(function(){
			    		$(el).find('.title').addClass('animated fadeInUp')
			    	}, 300)

			    	setTimeout(function(){
			    		$(el).find('.img').addClass('animated fadeInRight')
			    	}, 600)
			    })
			    .on('exit', function(el){
			    	$('.scroll_down').removeClass('active')
			    })
		}


		if( $('.advantages').length ) {
			inView('.advantages')
			    .on('enter', function(el){
			    	$('.first_section .title').addClass('animated fadeInUp')
			    	$('.first_section .img').addClass('animated fadeInRight')

			    	$(el).find('ul li:eq(0)').addClass('animated fadeInLeft')

			    	setTimeout(function(){
			    		$(el).find('ul li:eq(1)').addClass('animated fadeInLeft')
			    	}, 300)

			    	setTimeout(function(){
			    		$(el).find('ul li:eq(2)').addClass('animated fadeInLeft')
			    	}, 600)

			    	setTimeout(function(){
			    		$(el).find('ul li:eq(3)').addClass('animated fadeInLeft')
			    	}, 900)

			    	setTimeout(function(){
			    		$(el).find('ul li:eq(4)').addClass('animated fadeInLeft')
			    	}, 1200)

			    	setTimeout(function(){
			    		$(el).find('ul li:eq(5)').addClass('animated fadeInLeft')
			    	}, 1500)
			    })
		}


		if( $('.obesity').length ) {
			inView('.obesity')
			    .on('enter', function(el){
			    	setTimeout(function(){
			    		$(el).find('.grid .item:eq(0)').addClass('animated fadeInUp')
			    		$(el).find('.img').addClass('animated fadeInLeft')
			    	}, 300)

			    	setTimeout(function(){
			    		$(el).find('.grid .item:eq(1)').addClass('animated fadeInUp')
			    	}, 600)

			    	setTimeout(function(){
			    		$(el).find('.grid .item:eq(2)').addClass('animated fadeInUp')
			    	}, 900)

			    	setTimeout(function(){
			    		$(el).find('.grid .item:eq(3)').addClass('animated fadeInUp')
			    	}, 1200)

			    	setTimeout(function(){
			    		$(el).find('.grid .item:eq(4)').addClass('animated fadeInUp')
			    	}, 1500)

			    	setTimeout(function(){
			    		$(el).find('.grid .item:eq(5)').addClass('animated fadeInUp')
			    	}, 1800)
			    })
		}


		if( $('.at_weight').length ) {
			inView('.at_weight')
			    .on('enter', function(el){
			    	setTimeout(function(){
			    		$(el).find('.grid .item:eq(0)').addClass('animated fadeInUp')
			    		$('.obesity .img').addClass('animated fadeInLeft')
			    	}, 300)

			    	setTimeout(function(){
			    		$(el).find('.grid .item:eq(1)').addClass('animated fadeInUp')
			    	}, 600)

			    	setTimeout(function(){
			    		$(el).find('.grid .item:eq(2)').addClass('animated fadeInUp')
			    	}, 900)

			    	setTimeout(function(){
			    		$(el).find('.grid .item:eq(3)').addClass('animated fadeInUp')
			    	}, 1200)

			    	setTimeout(function(){
			    		$(el).find('.grid .item:eq(4)').addClass('animated fadeInUp')
			    	}, 1500)

			    	setTimeout(function(){
			    		$(el).find('.grid .item:eq(5)').addClass('animated fadeInUp')
			    	}, 1800)
			    })
		}


		if( $('.perfect_drug').length ) {
			inView('.perfect_drug')
			    .on('enter', function(el){
			    	setTimeout(function(){
			    		$(el).find('.items .item:eq(0)').addClass('animated fadeInRight')
			    		$('.obesity .img').addClass('animated fadeInLeft')
			    	}, 300)

			    	setTimeout(function(){
			    		$(el).find('.items .item:eq(1)').addClass('animated fadeInRight')
			    	}, 600)

			    	setTimeout(function(){
			    		$(el).find('.items .item:eq(2)').addClass('animated fadeInRight')
			    	}, 900)

			    	setTimeout(function(){
			    		$(el).find('.items .item:eq(3)').addClass('animated fadeInRight')
			    	}, 1200)
			    })
		}


		if( $('.ideal_drug').length ) {
			inView('.ideal_drug')
			    .on('enter', function(el){
			    	setTimeout(function(){
			    		$(el).find('.title.top').addClass('animated fadeIn')
			    	}, 300)

			    	setTimeout(function(){
			    		$(el).find('.col.left').addClass('animated fadeInLeft')
			    	}, 300)

			    	setTimeout(function(){
			    		$(el).find('.col.right').addClass('animated fadeInRight')
			    	}, 300)

			    	setTimeout(function(){
			    		$(el).find('.img img').addClass('animated zoomIn')
			    	}, 1000)

			    	setTimeout(function(){
			    		$(el).find('.title.bottom').addClass('animated fadeInUp')
			    	}, 1200)


			    	setTimeout(function(){
			    		$(el).find('.col.left li:eq(0)').addClass('animated fadeInUp')
			    	}, 1100)

			    	setTimeout(function(){
			    		$(el).find('.col.left li:eq(1)').addClass('animated fadeInUp')
			    	}, 1300)

			    	setTimeout(function(){
			    		$(el).find('.col.left li:eq(2)').addClass('animated fadeInUp')
			    	}, 1500)


			    	setTimeout(function(){
			    		$(el).find('.col.right li:eq(0)').addClass('animated fadeInUp')
			    	}, 1100)

			    	setTimeout(function(){
			    		$(el).find('.col.right li:eq(1)').addClass('animated fadeInUp')
			    	}, 1300)

			    	setTimeout(function(){
			    		$(el).find('.col.right li:eq(2)').addClass('animated fadeInUp')
			    	}, 1500)
			    })
		}


		if( $('.page_head').length ) {
			inView('.page_head')
			    .on('enter', function(el){
			    	setTimeout(function(){
			    		$(el).find('img').addClass('animated fadeInRight')
			    	}, 300)
			    })
		}


		if( $('.for_doctor .info').length ) {
			inView('.for_doctor .info')
			    .on('enter', function(el){
			    	setTimeout(function(){
			    		$(el).find('.img').addClass('animated fadeInRight')
			    	}, 300)
			    })
		}


		if( $('.information .info').length ) {
			inView('.information .info')
			    .on('enter', function(el){
			    	setTimeout(function(){
			    		$(el).find('.img').addClass('animated fadeInRight')
			    	}, 300)
			    })
		}


		if( $('.text_block .download').length ) {
			inView('.text_block .download')
			    .on('enter', function(el){
			    	var delay = 300

			    	$(el).find('> *').each(function(){
			    		var _self = $(this)

			    		setTimeout(function(){
				    		_self.addClass('animated fadeInUp')
				    	}, delay)

				    	delay = (delay+200)
			    	})
			    })
		}


		if( $('.reduxin_head').length ) {
			inView('.reduxin_head')
			    .on('enter', function(el){
			    	setTimeout(function(){
			    		$(el).find('.info').addClass('animated fadeInLeft')
			    		$(el).find('.img').addClass('animated fadeInRight')
			    	}, 300)
			    })
		}
	}


	if( $(window).width() > 767 ){
		if( $('.obesity').length ) {
			inView('.obesity')
			    .on('enter', function(el){
			    	setTimeout(function(){
			    		$('.obesity .img img.thick').css('opacity', '1')
			    		$('.obesity .img img.thin').css('opacity', '0')
			    	}, 300)
			    })
		}


		if( $('.at_weight').length ) {
			inView('.at_weight')
			    .on('enter', function(el){
			    	setTimeout(function(){
			    		$('.obesity .img img.thick').css('opacity', '0')
			    		$('.obesity .img img.thin').css('opacity', '1')
			    	}, 300)
			    })
		}


		if( $('.perfect_drug').length ) {
			inView('.perfect_drug')
			    .on('enter', function(el){
			    	setTimeout(function(){
			    		$('.obesity .img img.thick').css('opacity', '0')
			    		$('.obesity .img img.thin').css('opacity', '1')
			    	}, 300)
			    })
		}
	}
})