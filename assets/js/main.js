function initialize() {
    var innerWidth = window.innerWidth < window.screen.width ? window.innerWidth : window.screen.width;
    var innerHeight = window.innerHeight < window.screen.height ? window.innerHeight : ((window.innerHeight / window.innerWidth) * window.screen.width);

    var v22 = Math.ceil(0.15 * window.innerWidth);
    var v8 = 0.08 * window.innerWidth;
    var imgOriWidth = 1070;
    var imgOriHeight = 1513;

    var stageWidth = Math.ceil(0.7 * innerWidth);
    var stageHeight = Math.ceil(innerHeight - 0.06 * innerWidth);
    var scale_factor;
    if(innerWidth>768){
        $(".content-stage").css("margin-left", 0.8 * v22);
        $(".content-stage").css("margin-right", 1.2 * v22);
        
        var const_head_footer = 6 + 13.5;
        
         scale_factor= stageWidth / imgOriWidth;
         stageHeight = Math.ceil(scale_factor * imgOriHeight);
        
        $(".content-image").css({ "width": stageWidth + "px", "height": "initial" });
        $(".content-stage").css({ "width": stageWidth , "height": stageHeight })
        $(".container-shadow img").attr("style" , "position:absolute; z-index:110; top:" + (0 ) + "px; left:" + (0 ) + "px; width:" + (stageWidth) + "px; height:" + (Math.floor(stageHeight)-20) + "px; cursor:pointer");
		$(".container-drone img").attr("style" , "position:absolute; z-index:110; top:" + (0 ) + "px; left:" + (0 ) + "px; width:" + (stageWidth) + "px; height:" + (Math.floor(stageHeight)-20) + "px; cursor:pointer");
    
    }else
    if(innerWidth <= 768){
        var v8 = 0.08 * innerWidth;
        $(".content-stage").css("margin-left", v8);
        $(".content-stage").css("margin-right", v8);
        var const_head_footer = (24.5 + 22.4) / 100;

        stageWidth = 0.84 * innerWidth;
        scale_factor = stageWidth / imgOriWidth;
        stageHeight = scale_factor * imgOriHeight;

        if(stageHeight>innerHeight-const_head_footer*innerWidth){
            v8=0.12*innerWidth;
            $(".content-stage").css("margin-left",v8);
            $(".content-stage").css("margin-right",v8);
            var const_head_footer=(24.5+22.4)/100;

            stageWidth= 0.76*innerWidth;
            var scale_factor= stageWidth/imgOriWidth;
            stageHeight = scale_factor*imgOriHeight;
        }

        var cont_h=stageHeight<innerHeight?innerHeight-const_head_footer*innerWidth:stageHeight;
        var cont_martop=stageHeight<innerHeight? (cont_h-stageHeight)/2:0;

        $(".content-stage").css({ "width": stageWidth + "px", "height": cont_h })
        $(".container-shadow img").attr("style" ,"position:absolute; z-index:110; top:" + (0 ) + "px; left:" + (0 ) + "px; width:" + (stageWidth) + "px; height:" + (cont_h-20) + "px; cursor:pointer");
		
		$(".container-drone img").attr("style" ,"position:absolute; z-index:110; top:" + (0 ) + "px; left:" + (0 ) + "px; width:" + (stageWidth) + "px; height:" + (cont_h-20) + "px; cursor:pointer");

        $(".content-image").css({ "width": stageWidth + "px", "height": "initial" });
        $(".img-wrapper").css("padding-top",cont_martop+"px");

    }

    var imageWidth = parseInt($(".content-image").css("width"));
    var imageHeight = parseInt($(".content-image").css("height"));
    $(".content-holder").css({ "width": imageWidth, "height": imageHeight })

    
    picratio = imageWidth / 1280;
    
    $(".content-tagline img").attr("style" ,"position:absolute; z-index:110; top:" + (74 * picratio) + "px; left:" + (480 * picratio) + "px; width:" + (402 * picratio) + "px; height:" + (156 * picratio) + "px; cursor:pointer");


    $(".content-win img").attr("style" ,"position:absolute; z-index:110; top:" + (1193 * picratio) + "px; left:" + (4 * picratio) + "px; width:" + (285 * picratio) + "px; height:" + (400 * picratio) + "px; cursor:pointer");

    $(".content-review img").attr("style" ,"position:absolute; z-index:110; top:" + (1115 * picratio) + "px; left:" + (495 * picratio) + "px; width:" + (272 * picratio) + "px; height:" + (600 * picratio) + "px; cursor:pointer");

    $(".content-preorder img").attr("style" ,"position:absolute; z-index:111; top:" + (1067 * picratio) + "px; left:" + (653 * picratio) + "px; width:" + (433 * picratio) + "px; height:" + (400 * picratio) + "px; cursor:pointer");

	
    $(".content-thin-laptop img").attr("style" ,"position:absolute; z-index:110; top:" + (587 * picratio) + "px; left:" + (188 * picratio) + "px; width:" + (355 * picratio) + "px; height:" + (460 * picratio) + "px; cursor:pointer");
	

    $(".content-aio img").attr("style" ,"position:absolute; z-index:110; top:" + (617 * picratio) + "px; left:" + (514 * picratio) + "px; width:" + (419 * picratio) + "px; height:" + (535 * picratio) + "px; cursor:pointer");
    
    $(".content-porsche img").attr("style" ,"position:absolute; z-index:110; top:" + (695 * picratio) + "px; left:" + (816 * picratio) + "px; width:" + (399 * picratio) + "px; height:" + (447 * picratio) + "px; cursor:pointer");
    
    $(".content-connector img").attr("style" ,"position:absolute; z-index:110; top:" + (887 * picratio) + "px; left:" + (110 * picratio) + "px; width:" + (517 * picratio) + "px; height:" + (705 * picratio) + "px; cursor:pointer");
}

function checkContent()
{
    if ($('.content-image').width() == 0) {
        setTimeout(checkContent, 10);
    } else {
        initialize();
    }
}

function staging(){
    if ($(".container-fluid").css("display") == "block") {
        setTimeout(checkContent, 10);
    }
}

function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
	var obj = document.getElementById ( id );
	var parentObj = obj.parentNode,
	containerWidth = parseInt( parentObj.offsetWidth ),
	containerHeight = parseInt( parentObj.offsetHeight );
	obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
	obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
}


$( document ).ready(function() {
    $(window).resize(function() {
        staging();
    });
	
	// Add Parallax event listener
	var parallaxBox = document.getElementById('content-parallax');
	var s1Left = document.getElementById('shadow1').offsetLeft,
	s1Top = document.getElementById('shadow1').offsetTop,
	s2Left = document.getElementById('shadow2').offsetLeft,
	s2Top = document.getElementById('shadow2').offsetTop,
	dLeft = document.getElementById('drone').offsetLeft,
	dTop = document.getElementById('drone').offsetTop;
	
    parallaxBox.onmousemove = function (event) {
		event = event || window.event;
		var x = event.clientX - parallaxBox.offsetLeft,
		y = event.clientY - parallaxBox.offsetTop;
		
		mouseParallax('shadow1', s1Left, s1Top, x, y, 5);
		mouseParallax('shadow2', s2Left, s2Top, x, y, 15);
		mouseParallax('drone', dLeft, dTop, x, y, 25);
	}
	
	// Hover effect
	$('.content-tagline').hover( function () {
		$('.content-tagline img, .winlaptop-hover img').removeClass('zoom zoom-r');
        $('.content-tagline img, .winlaptop-hover img').addClass('zoom');
    }, function(){
        $('.content-tagline img, .winlaptop-hover img').addClass('zoom-r');
    });
	
	$('.content-thin-laptop').hover( function () {
		$('.content-thin-laptop img, .winlaptop-hover img').removeClass('zoom zoom-r');
        $('.content-thin-laptop img, .winlaptop-hover img').addClass('zoom');
    }, function(){
        $('.content-thin-laptop img, .winlaptop-hover img').addClass('zoom-r');
    });
	
	$('.content-aio').hover( function () {
		$('.content-aio img, .winlaptop-hover img').removeClass('zoom zoom-r');
        $('.content-aio img, .winlaptop-hover img').addClass('zoom');
    }, function(){
        $('.content-aio img, .winlaptop-hover img').addClass('zoom-r');
    });
	
	$('.content-porsche').hover( function () {
		$('.content-porsche img, .winlaptop-hover img').removeClass('zoom zoom-r');
        $('.content-porsche img, .winlaptop-hover img').addClass('zoom');
    }, function(){
        $('.content-porsche img, .winlaptop-hover img').addClass('zoom-r');
    });
	
	$('.content-preorder').hover( function () {
		$('.content-preorder img, .winlaptop-hover img').removeClass('zoom zoom-r');
        $('.content-preorder img, .winlaptop-hover img').addClass('zoom');
    }, function(){
        $('.content-preorder img, .winlaptop-hover img').addClass('zoom-r');
    });
	
	$('.content-win').hover( function () {
		$('.content-win img, .winlaptop-hover img').removeClass('zoom zoom-r');
        $('.content-win img, .winlaptop-hover img').addClass('zoom');
    }, function(){
        $('.content-win img, .winlaptop-hover img').addClass('zoom-r');
    });
	
	$('.content-review').hover( function () {
		$('.content-review img, .winlaptop-hover img').removeClass('zoom zoom-r');
        $('.content-review img, .winlaptop-hover img').addClass('zoom');
    }, function(){
        $('.content-review img, .winlaptop-hover img').addClass('zoom-r');
    });
	
	$('.btn-share').hover( function () {
		$('.btn-share, .winlaptop-hover img').removeClass('zoom zoom-r');
        $('.btn-share, .winlaptop-hover img').addClass('zoom');
    }, function(){
        $('.btn-share, .winlaptop-hover img').addClass('zoom-r');
    });
	
	$('.btn-store').hover( function () {
		$('.btn-store, .winlaptop-hover img').removeClass('zoom zoom-r');
        $('.btn-store, .winlaptop-hover img').addClass('zoom');
    }, function(){
        $('.btn-store, .winlaptop-hover img').addClass('zoom-r');
    });
	
	$('.btn-chat').hover( function () {
		$('.btn-chat, .winlaptop-hover img').removeClass('zoom zoom-r');
        $('.btn-chat, .winlaptop-hover img').addClass('zoom');
    }, function(){
        $('.btn-chat, .winlaptop-hover img').addClass('zoom-r');
    });
	
	setTimeout(checkContent, 10);
	
});

