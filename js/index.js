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
            name: 'Javascript',
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
    ],

        books = [{
            name: 'Effective Java中文版',
            link: 'https://www.amazon.cn/dp/B001PTGR52/ref=sr_1_3?ie=UTF8&qid=1536560667&sr=8-3&keywords=%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3java%E8%99%9A%E6%8B%9F%E6%9C%BA',
            png:'./images/effectiveJava.png'
        },{
            name: 'javascript权威指南',
            link: 'https://www.amazon.cn/dp/B007VISQ1Y/ref=sr_1_2?ie=UTF8&qid=1536558731&sr=8-2&keywords=javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1',
            png:'./images/javascript.png'
        },{
            name: '西游记',
            link: 'https://www.amazon.cn/dp/B0011BQ24A/ref=sr_1_1?ie=UTF8&qid=1536560383&sr=8-1&keywords=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
            png:'./images/xiyouji.png'
        }
        ,{
            name: '深入理解Java虚拟机：JVM高级特性与最佳实践',
            link: 'https://www.amazon.cn/dp/B00D2ID4PK/ref=sr_1_1?ie=UTF8&qid=1536560667&sr=8-1&keywords=%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3java%E8%99%9A%E6%8B%9F%E6%9C%BA',
            png:'./images/javavm.png'
        },{
            name: 'Spring MVC学习指南',
            link: 'https://www.yiibai.com/spring_mvc/',
            png:'./images/springmvc.png'
        },{
            name: '三体全集',
            link: 'https://www.amazon.cn/dp/B075ZC8C37/ref=sr_1_2?ie=UTF8&qid=1536560408&sr=8-2&keywords=%E4%B8%89%E4%BD%93',
            png:'./images/threebody.png'
        },{
            name: 'HTML5权威指南',
            link: 'https://www.amazon.cn/dp/B00H706BIG/ref=sr_1_1?ie=UTF8&qid=1536560315&sr=8-1&keywords=HTML5',
            png:'./images/html5.png'
        },{
            name:'耶路撒冷三千年',
            link:'https://www.amazon.cn/gp/product/B00PIJYM2U/ref=kinw_myk_ro_title',
            png:'./images/yelusaleng.png'

        },{
            name:'这个历史挺靠谱:袁腾飞讲历史全集(共3册) (博集历史典藏馆)',
            link:'https://www.amazon.cn/gp/product/B00G8S2YBG/ref=kinw_myk_ro_title',
            png:'./images/funnyhistory.png'
        },{
            name:'JavaScript高级程序设计',
            link:'https://www.amazon.cn/dp/B007OQQVMY/ref=sr_1_1?ie=UTF8&qid=1536558731&sr=8-1&keywords=javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1',
            png:'./images/advJavascript.png'
        }


    ],

    works = [
        { name : 'iWeather', link: 'https://happydongzh.github.io/iweather/' },
        { name : 'Gallery3D', link: 'https://happydongzh.github.io/Gallery3D/' },
        { name : 'mVisualizer', link: 'https://happydongzh.github.io/mvisualizer/' },
        { name : 'CubeShow', link: 'https://happydongzh.github.io/cubeShow/' },
        { name : 'iClock', link:'https://happydongzh.github.io/clock/'},
        { name : 'Calendar', link: 'https://happydongzh.github.io/calendar/'}
    ],
    certs = ['java.png', 'rhel.png', 'rhel2.png'];
    
    
    var _html = '';
    skills.forEach(function(v) {
        _html += '<div><br><div><span>' + v.name + '</span><div style="width:' + v.score + '%"></div></div></div>';
    });
    $('div.skills').html($('div.skills').html() + _html);

    books.forEach(function(v){
        let  b = $('<div></div>');
        b.css({
            backgroundImage: 'url(' + v.png + ')'
        }).on('click', function(e){
            window.open(v.link);
        });
        $('#books').append(b);
    });

    works.forEach(function(v){
        let  b = $('<div></div>');
        b.html(v.name).on('click', function(e){
            window.open(v.link);
        });
        $('#gitworks').append(b);
    });

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
				let x = $('#slide').children();
				x.detach();
				pTarget.append(x);
			}

			let c = $(this).children().detach();
			$('div.cubesContainer').off('mouseleave', mouseOut);
            $('#slide').append(c).css({
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

    $('a.book').on('click', function(e){
        window.open($(this).attr('data-url'));
    });


});