//定义模块
define(['config', 'module-tool'], function (modtool) {
	// 1. 回到顶部
	require(['jquery'], function () {
		// alert(1);
		$('.fixed-nav li:eq(4)').on('click', function () {
			$('html,body').animate({//给body，html同时赋值，兼容的写法
				scrollTop: 0
			});
		});
	});
	// 2. 顶部悬浮
	; (function () {
		$(window).on('scroll', function () {
			var $top = $(window).scrollTop();
			console.log($top);
			if ($top >= 700) {
				$('.header').children().addClass('m-header-fixed');
				$('.nav-arrow-container').addClass('arrow');
				$('.nav-arrow-container').hover();
			} else {
				$('.header').children().removeClass('m-header-fixed');
				$('.nav-arrow-container').removeClass('arrow');
			}
		});
	})();



	// 3. 轮播图
	return {
		lunbo: (function () {
			alert(1);
			var banner = document.querySelector('.m-banner');
			var aBtn = document.querySelectorAll('.swip-button span');
			var aLi = document.querySelectorAll('.swip-banner a');
			var oUl = document.querySelector('.m-banner .swip-banner');
			var left = document.querySelector('.swiper-button-prev');
			var right = document.querySelector('.swiper-button-next');
			var num = 0; //存储当前的索引
			var bstop = true;

			//1.改变布局.
			var firstpic = aLi[0].cloneNode(true);
			var lastpic = aLi[aLi.length - 1].cloneNode(true);

			oUl.appendChild(firstpic);
			oUl.insertBefore(lastpic, oUl.children[0]);
			aLi = document.querySelectorAll('.taobao ul li');
			var liwidth = aLi[0].offsetWidth;

			oUl.style.width = aLi.length * liwidth + 'px';
			oUl.style.left = -liwidth + 'px';

			//2.小圆圈添加点击事件
			for (var i = 0; i < aBtn.length; i++) {
				aBtn[i].index = i; //自定义的属性
				aBtn[i].onclick = function () {
					num = this.index;
					tabSwitch();
					aBtn[num].className = 'active';
				}
			}

			//3.显示左右箭头
			taobao.onmouseover = function () {
				left.style.display = 'block';
				right.style.display = 'block';
				clearInterval(timer);
			};

			taobao.onmouseout = function () {
				left.style.display = 'none';
				right.style.display = 'none';
				timer = setInterval(function () {
					right.onclick();
				}, 2000);
			}


			//4.左右箭头添加点击事件
			right.onclick = function () {
				if (bstop) {
					bstop = false;
					num++;
					tabSwitch();
					if (num == aBtn.length) {
						aBtn[0].className = 'active';
					} else {
						aBtn[num].className = 'active';
					}
					document.title = num;
				}
			}
			left.onclick = function () {
				if (bstop) {
					bstop = false;
					num--;
					tabSwitch();
					if (num < 0) {
						aBtn[aBtn.length - 1].className = 'active';
					} else {
						aBtn[num].className = 'active';
					}
					document.title = num;
				}

			}
			//5.自动播放
			var timer = setInterval(function () {
				right.onclick();
			}, 2000);
			//ul位置移动的过程.
			function tabSwitch() {
				for (var i = 0; i < aBtn.length; i++) {
					aBtn[i].className = '';
				}
				modtool.buffermove(oUl, {
					left: -(num + 1) * liwidth
				}, function () {
					if (parseInt(oUl.style.left) < -liwidth * aBtn.length) {
						oUl.style.left = -liwidth + 'px';
						num = 0;
					}
					if (parseInt(oUl.style.left) > -liwidth) {
						oUl.style.left = -liwidth * aBtn.length + 'px';
						num = aBtn.length - 1;
					}
					bstop = true;
				});
			}
		})(),

		//4.  无缝幻灯片的切换-----1
		// wufeng: (function () {
		// 	class seaswitch2 {
		// 		constructor() {
		// 			this.box = document.querySelector(".swiper-container");
		// 			this.ul = document.querySelector(".swiper-wrapper");
		// 			this.li = document.querySelectorAll(".swiper-slide");
		// 			this.left = document.querySelector('.swiper-button-prev');
		// 			this.right = document.querySelector('swiper-button-next');
		// 			// this.num = 1;
		// 			this.speed = -2;
		// 		}
		// 		init() {
		// 			var _this = this;
		// 			this.li = document.querySelectorAll(".swiper-slide");
		// 			this.time = setInterval(function () {
		// 			    _this.move();
		// 			}, 10)
		// 		}
		// 		move() {
		// 			if (this.ul.offsetLeft < -this.ul.offsetWidth / 2) {
		// 				this.ul.style.left = 0 + "px";
		// 			}
		// 			this.ul.style.left = this.ul.offsetLeft + this.speed + "px";
		// 		}
		// 	}
		// 	new seaswitch2().init();
		// })(),
		// //4.  无缝幻灯片的切换-----1
        wufeng1:(function(){
			var imgwidth=266;
			var aLi = document.querySelectorAll('.swip-banner a');
			var imgnum=$('.swip-banner a').length;
			 // 复制所有图片节点对象
			let colneImage = $('.swip-banner a').clone();
			listNum=listNum*2;
			// 添加到最后的位置 并设置 ul 的宽度
			$('.swiper-wrapper').append(colneImage).css('width',imgNum*imgWidth);
			
			let n = 0;
			// 向左
			$('.swiper-button-prev').click(function() {
				moveImage(++n);
			});
			// 向右
			$('.swiper-button-next').click(function() {
				moveImage(--n);
			});
			function moveImage() {
 
 
				// 最后一张
				if (n === imgNum/2+1) {
				  $('.swiper-wrapper').css({
					left: 0
				  })
				  n = 1;
				  // console.log('最后一张')
				  // console.log(i)
				}
			 
				// 是第一张的时候
				if (n === -1) {
				  n = imgNum/2 -1;
				  $('.swiper-wrapper').css({
					left: (imgNum/2 ) * -imgWidth
				  });
				}
			 
				// 移动图片动画
				$('.swiper-wrapper').stop().animate({
				  left: n * -imgWidth
				}, 1000);
			}
	  } )

	}

})
