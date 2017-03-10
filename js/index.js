$(function ($) {
	/**
	var info = "I'm Alex. A web developer in XI\'AN. I love music, reading, travel, sports and all other funny things. I'm a good self learner. I think keep learning can make your life better."

	var recentWorks = [
		{
			name: '3dGallery',
			desc: 'A 3d gallery photo explorer plugin.'
		},
		{
			name: 'MVisualizer',
			desc: 'A js plug-in based on web audio api.'
		},
		{
			name: 'jCards',
			desc: 'A slide show jquery plugin'
		},
		{
			name: 'iWeather',
			desc: 'a weather app like ios weather forcast.'
		}

	];

	var skills = [{
		name: 'JAVA',
		score: 80,
		subTec: [
			{
				name: 'Struts',
				score: 80
			},
			{
				name: 'Spring',
				score: 1
			}, {
				name: 'SpringMVC',
				score: 1
			}

		]
	}, {
		name: 'JAVASCRIPT',
		score: 80,
		subTec: [
			{
				name: 'JQuery',
				score: 80
			},
			{
				name: 'Dojo',
				score: 1
			}, {
				name: 'YUI2',
				score: 1
			}, {
				name: '',
				score: 1
			}, {
				name: '',
				score: 1
			}
		]
	}, {
		name: 'css',
		score: 80,
		subTec: []
	}, {
		name: 'html5',
		score: 80,
		subTec: []
	}, {
		name: 'linux',
		score: 80,
		subTec: [
			{
				name: 'ubuntu',
				score: 1
			},
			{
				name: 'redhat',
				score: 1
			}
		]
	}, {
		name: 'mysql',
		score: 80,
		subTec: []
	}];


	var myBasicInfo = {
		name: 'Alex',
		location: 'XIAN',
		birthday: '24 Nov',
		gender: 'Male'
	};
	var myInformation = [];
**/

	$('header h1').addClass('animated bounceIn');
	$('div.cubesContainer').addClass('animated bounceIn');
	$('header').addClass('test');
	var dirName = ['Top', 'Right', 'Bottom', 'Left'];
	var angle = 90,
		turnCount = 0;
	$('div.cubesContainer').hover(function (e) {
		var w = $(this).width(),
			h = $(this).height();
		var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
		var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
		var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
		var eventType = e.type;
		if (e.type == 'mouseenter') {
			$(this).children('div.box').addClass('enterFrom' + dirName[(direction == 0 || direction == 1) ? 1 : 3]);
		}

	}, function (e) {
		turnCount = 0;
		$(this).children('div.box').removeClass('enterFromLeft enterFromRight').css({
			transform: ''
		});
		$('div.bg').removeClass('blur');
		$(this).prevAll().removeClass('blur');
		$(this).nextAll().removeClass('blur');

	}).click(function (e) {
		$('div.bg').addClass('blur');
		var fromLeft = $(this).children('div.box').hasClass('enterFromLeft');
		var _angle = (angle * ++turnCount);
		_angle = fromLeft ? _angle : -_angle;
		$(this).children('div.box').css({
			transform: 'translateZ(-100px) rotateY(' + _angle + 'deg)'
		});
		$(this).prevAll().addClass('blur');
		$(this).nextAll().addClass('blur');

	});

	$('div.qrcode').click(function () {
		$(this).toggleClass('biggerQR');
	}).parent().parent().mouseleave(function () {
		$(this).find('div.qrcode').removeClass('biggerQR');
	});

	var imgs = ['images/yellow-mountains-532857_1920.jpg', 'images/panorama-1993645_1280.jpg', 'images/basaltic.jpg'];


	$('div.cubesContainer div.box').each(function (index, box) {
		var img = document.createElement('IMG');
		img.setAttribute('src', imgs[index]);
		img.onload = function (e) {
			$(box).children().each(function () {
				if (!$(this).hasClass('top') || !$(this).hasClass('bottom')) {
					//console.log('fdfd');
					$(this).css({
						backgroundImage: 'url(' + imgs[index] + ')'
					});
				}
			});
		};

	});

});