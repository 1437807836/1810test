// 1. 顶部悬浮
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
})()
    ; (function () {
        $('.fixed-nav li:eq(4)').on('click', function () {
            $('html,body').animate({//给body，html同时赋值，兼容的写法
                scrollTop: 0
            });
        });
    })();


// 2. 轮播图
// ;(function(){
//     // alert(1);
//     var banner=document.querySelector('.m-banner');
//     var aBtn =document.querySelectorAll('.swip-button span'); 
//     var aLi = document.querySelectorAll('.swip-banner .img-box');
//     var oUl = document.querySelector('.m-banner .swip-banner');
//     var left = document.querySelector('.swiper-button-prev');
//     var right = document.querySelector('.swiper-button-next');
//     var num = 0; //存储当前的索引
//     var bstop = true;

//     //1.改变布局.
//     // alert(aLi.length);
//     var firstpic = aLi[0].cloneNode(true);
//     var lastpic = aLi[aLi.length - 1].cloneNode(true);

//     oUl.appendChild(firstpic);
//     oUl.insertBefore(lastpic, oUl.children[0]);
//     aLi = document.querySelectorAll('.taobao ul li');
//     var liwidth = aLi[0].offsetWidth;
//     oUl.style.width = aLi.length * liwidth + 'px';
//     oUl.style.left = -liwidth + 'px';

//     //2.小圆圈添加点击事件
//     for(var i = 0; i < aBtn.length; i++) {
//         aBtn[i].index = i; //自定义的属性
//         aBtn[i].onclick = function() {
//             num = this.index;
//             tabSwitch();
//             aBtn[num].className = 'active';
//         }
//     }

//     //3.显示左右箭头
//     taobao.onmouseover = function() {
//         left.style.display = 'block';
//         right.style.display = 'block';
//         clearInterval(timer);
//     };

//     taobao.onmouseout = function() {
//         left.style.display = 'none';
//         right.style.display = 'none';
//         timer = setInterval(function() {
//             right.onclick();
//         }, 2000);
//     }


//     //4.左右箭头添加点击事件
//     right.onclick = function() {
//         if(bstop) {
//             bstop = false;
//             num++;
//             tabSwitch();
//             if(num == aBtn.length) {
//                 aBtn[0].className = 'active';
//             } else {
//                 aBtn[num].className = 'active';
//             }
//             document.title = num;
//         }
//     }
//     left.onclick = function() {
//         if(bstop) {
//             bstop = false;
//             num--;
//             tabSwitch();
//             if(num < 0) {
//                 aBtn[aBtn.length - 1].className = 'active';
//             } else {
//                 aBtn[num].className = 'active';
//             }
//             document.title = num;
//         }

//     }
//     //5.自动播放
//     var timer = setInterval(function() {
//         right.onclick();
//     }, 2000);
//     //ul位置移动的过程.
//     function tabSwitch() {
//         for(var i = 0; i < aBtn.length; i++) {
//             aBtn[i].className = '';
//         }
//         modtool.buffermove(oUl, {
//             left: -(num + 1) * liwidth
//         }, function() {
//             if(parseInt(oUl.style.left) < -liwidth * aBtn.length) {
//                 oUl.style.left = -liwidth + 'px';
//                 num = 0;
//             }
//             if(parseInt(oUl.style.left) > -liwidth) {
//                 oUl.style.left = -liwidth * aBtn.length + 'px';
//                 num = aBtn.length - 1;
//             }
//             bstop = true;
//         });
//     }
// })();
//4. 轮播图
; (function () {
    var $box = $('.m-banner');
    var $btns = $('.swip-button span');
    var $pics = $('.swip-banner .img-box');
    var $left = $('.swiper-button-prev');
    var $right = $('.swiper-button-next');
    var $timer = null;
    var $autoplaytimer = null;
    var $num = 0;
    // 盒子移入的时候的效果
    $box.hover(function () {
        $('.swiper-button-prev,.swiper-button-next').show();
        clearInterval($autoplaytimer);
    }, function () {
        $('.swiper-button-prev,.swiper-button-next').hide();
        $autoplaytimer = setInterval(function () {
            $right.click();
        }, 3000);
    });
    //    按钮移入移出
    $btns.hover(function () {
        $num = $(this).index();//当前的索引
        $timer = setTimeout(function () {
            change();
        }, 400)
    }, function () {
        clearTimeout($timer);
    });
    // 右边
    $right.on('click', function () {
        $num++;
        if ($num > $btns.length - 1) {
            $num = 0;
        }
        change();
    });
    // 左边
    $left.on('click', function () {
        $num--;
        if ($num < 0) {
            $num = $btns.length - 1;
        }
        change();
    });
    // 切换的效果
    function change() {
        $btns.eq($num).addClass('swip-bullet-active').siblings('span').removeClass('swip-bullet-active');
        $pics.eq($num).animate({
            opacity: 1
        }).siblings('a').animate({
            opacity: 0
        });
    }
    $autoplaytimer = setInterval(function () {
        $right.click();
    }, 5000);
})();

// 5. 幻灯片
; (function () {
    // alert(1);
    class seaswitch2 {
        constructor() {
            this.box = document.querySelector(".swiper-container");
            this.ul = document.querySelector(".swiper-wrapper");
            this.li = document.querySelectorAll(".swiper-slide");
            this.left = document.querySelector('.swiper-button-prev');
            this.right = document.querySelector('.swiper-button-next');
            this.num = 0;
            this.speed = -2;
        }
        init() {
            var _this = this;
            this.liwidth = this.li[0].offsetWidth;
            this.li = document.querySelectorAll(".swiper-slide");
            this.right.onclick = function () {
                _this.rclick();
            }
            this.left.onclick=function(){
                _this.lclick();
            }
        }
        lclick() {
            this.num--;    
            buffermove(this.ul, { left: this.liwidth * this.num * 1 }, function () {
                if (_this.num <= 0) {
                    _this.ul.style.left = 0  + "px";
                    _this.num = 0;
                }
            });
        }
        rclick() {
            var _this = this;
            this.num++;
            buffermove(this.ul, { left: -this.liwidth *_this.num * 1}, 
                function () {
                if (_this.num >_this.li.length-1) {              
                    _this.ul.style.left = -_this.liwidth * this.l + "px";
                    _this.num = this.li.length-1;
                }
            }
            );
        }
        
    }
    new seaswitch2().init();
})();

// 6. 搜索引擎。
; (function () {
    $('.m-autocomplete input').on('input', function () {
        $.ajax({
            url: "https://suggest.taobao.com/sug?code=utf-8&q=" + $('.m-autocomplete input').val() + "&callback=text",
            // url:"https://suggest.taobao.com/sug?code=utf-8&q=手机&callback=text",
            dataType: 'jsonp',
            type: "get",
            success: function (data) {
                // console.log(data);
                // console.log(data.result);
                $('.m-autocomplete ul').find('li').remove();
                console.log($('.m-autocomplete ul'));
                $.each(data.result, function (i, val) {
                    $('.m-autocomplete ul').prepend('<li><span>' + val[0] + '</span><span>约' + val[1] + '个商品</span></li>');
                })
                $('.m-autocomplete ul').show();
            },
        });
    });



//   懒加载
$(function () {
    $("img.lazy").lazyload({
        effect: "fadeIn"
    });
});

})()








