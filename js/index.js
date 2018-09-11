$(function($) {


    $('header h1').addClass('animated bounceIn');
    $('div.cubesContainer').addClass('animated bounceIn');
    $('header').addClass('test');
    var dirName = ['Top', 'Right', 'Bottom', 'Left'];
    var angle = 90,
        turnCount = 0,
        mouseIn = function(e) {
            var w = $(this).width(),
                h = $(this).height();
            var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
            var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
            var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
            var eventType = e.type;
            if (e.type == 'mouseenter') {
                $(this).children('div.box').addClass('enterFrom' + dirName[(direction == 0 || direction == 1) ? 1 : 3]);
            }
        },
        mouseOut = function(e) {
            turnCount = 0;
            $(this).children('div.box').removeClass('enterFromLeft enterFromRight').css({
                transform: ''
            });
            $('div.bg').removeClass('blur');
            $(this).prevAll().removeClass('blur');
            $(this).nextAll().removeClass('blur');
        };
    $('div.cubesContainer').hover(mouseIn, mouseOut).click(function(e) {
        $('div.bg').addClass('blur');
        var fromLeft = $(this).children('div.box').hasClass('enterFromLeft');
        var _angle = (angle * turnCount++);
        _angle = fromLeft ? _angle : -_angle;
        $(this).children('div.box').css({
            transform: 'translateZ(-100px) rotateY(' + _angle + 'deg)'
        });
        $(this).prevAll().addClass('blur');
        $(this).nextAll().addClass('blur');
    });

    $('div.qrcode').click(function() {
        $(this).toggleClass('biggerQR');
    }).parent().parent().mouseleave(function() {
        $(this).find('div.qrcode').removeClass('biggerQR');
    });

    var imgs = ['images/yellow-mountains-532857_1920.jpg', 'images/basaltic.jpg', 'images/panorama-1993645_1280.jpg'];


    $('div.cubesContainer div.box').each(function(index, box) {
        var img = document.createElement('IMG');
        img.setAttribute('src', imgs[index]);
        img.onload = function(e) {
            $(box).children().each(function() {
                if (!$(this).hasClass('top') || !$(this).hasClass('bottom')) {
                    //console.log('fdfd');
                    $(this).css({
                        backgroundImage: 'url(' + imgs[index] + ')'
                    });
                }
            });
        };
    });


    var skills = [{
            name: 'javascript',
            score: 85
        },
        { name: 'Java', score: 85 },
        {
            name: 'JQuery',
            score: 80
        },
        {
            name: 'Dojo',
            score: 60
        }, {
            name: 'YUI2',
            score: 70
        }, {
            name: 'Linux',
            score: 75
        }, {
            name: 'SpringMVC',
            score: 85
        },
        {
            name: 'AngularJS',
            score: 50
        },
        {
            name: 'CSS',
            score: 80
        }

    ]
    var _html = '';
    skills.forEach(function(v) {
        _html += '<div><br><div><span>' + v.name + '</span><div style="width:' + v.score + '%"></div></div></div>';
    });
    $('div.skills').html($('div.skills').html() + _html);

    var certs = ['java.png', 'rhel.png', 'rhel2.png'];

    certs.forEach(function(el) {
        let x = $('<div><div style="background-image:url(./images/' + el + ')"></div></div>');
        x.click(function(e) {
            e.stopPropagation();
			let orgTarget = $(this);
			let pTarget = null;
			orgTarget.siblings().each(function(i){
				if($(this).children().length == 0){
					pTarget = $(this);
				}
			});
			if(pTarget != null){
				console.log(pTarget.children().length)
				let x = $('#test').children();
				x.detach();
				pTarget.append(x);
			}

			let c = $(this).children().detach();
			$('div.cubesContainer').off('mouseleave', mouseOut);
            $('#test').append(c).css({
                transform: 'translateX(0)',
                opacity: 1
            }).one('click', function(e) {
				let b = $(this).children();//.detach();
				b.detach();
                //console.log(b == $(this));
                $(this).css({
                    transform: 'translateX(-180%)',
                    opacity: 0
                })
				//orgTarget.append(b);
				orgTarget.siblings().each(function(i){
					if($(this).children().length == 0){
						//pTarget = $(this);
						$(this).append(b);
					}
				});

				
				$('div.cubesContainer').on('mouseleave', mouseOut);
            });
        });
        $('#certs div.contentWrapper').append(x);
    });
});