//1.渲染商品列表, 传入两个参数，一个id和数量，根据id和数量渲染整个可见的列表.
function goodslist(id, count) {
    $.ajax({
        url: '../php/index.php',//获取所有的接口数据
        dataType: 'json'
    }).done(function (data) {
        $.each(data, function (index, value) {
            if (id == value.sid) {//遍历判断sid和传入的sid是否相同，方便将那条数据设置到渲染的商品列表中。
                console.log(value.sid);
                var $clonebox = $('.clonebox:hidden').clone(true, true);
                var $hidebox = $('.lister:hidden');
                // console.log($clonebox);
                $clonebox.find('.image').find('img').attr('src', value.url);
                $clonebox.find('.image').find('img').attr('sid', value.sid);
                $clonebox.find('.vertical-wrap').find('p').html(value.titile);
                $clonebox.find('.price').find('span').html(value.price);
                $clonebox.find('.num-reduce-add').find('span').html(count);
                //计算每个商品的价格。
                $clonebox.find('.subtotal').find('span').html((value.price * count).toFixed(2));
                $clonebox.css('display', 'block');
                $hidebox.css('display', 'block');
                $('.has-good-container').append($clonebox);
                priceall();//计算总价的
                console.log('xixi');
            }
        });
    })
}


//2.获取cookie，执行渲染列表的函数
if (getcookie('cooksid') && getcookie('cookienum')) {
    var s = getcookie('cooksid').split(',');//数组sid
    var n = getcookie('cookienum').split(',');//数组num
    $.each(s, function (i, value) {
        goodslist(s[i], n[i]);
    });
}
//3.如果购物车为空，显示empty-cart盒子(购物车空空的)
kong();
function kong() {
    if (getcookie('cooksid') && getcookie('cookienum')) {
        $('.no-good-container').hide();//cookie存在，购物车有商品，隐藏盒子。
    } else {
        $('.no-good-container').show();
    }
}
// 4. 计算总价
function priceall() {
    var $sum = 0;
    var $count = 0;
    $('.clonebox:visible').each(function (index, element) {
        if ($(element).find('.cart-checkbox input').prop('checked')) {
            $sum += parseInt($(element).find('.num-reduce-add').find('span').html());
            $count += parseFloat($(element).find('.subtotal').find('span').html());
        }
    });

    $('.already-select').html($sum);
    $('.total-after-prefer').html('￥' + $count.toFixed(2));
}


//5.全选操作
$('.allsel').on('change', function () {
    $('.clonebox:visible').find('input:checkbox').prop('checked', $(this).prop('checked'));
    $('.allsel').prop('checked', $(this).prop('checked'));
    priceall();//取消选项，重算总和。
});
var $inputs = $('.clonebox:visible').find('input:checkbox');
// 装商品的盒子
$('.cart-good-item').on('input', $inputs, function () {//事件委托
    if ($('.clonebox:visible').find('input:checkbox').size() == $('.clonebox:visible').find('input:checked').length) {
        $('.allsel').prop('checked', true);
    } else {
        $('.allsel').prop('checked', false);
    }
    totalprice();
});

//6.改变商品的数量

$('.m-icons-add-active').on('click', function () {
    var addvalue = $(this).parents('.cart-good-item').find('.num-reduce-add span').html();
    addvalue++;
    console.log(addvalue);
    if (addvalue > 99) {
        addvalue = 99;
    }
    $(this).parents('.cart-good-item').find('.num-reduce-add span').html(addvalue);
    $(this).parents('.cart-good-item').find('.subtotal span').html(calcsingleprice($(this)));
    totalprice();
    changecookie($(this));
});

// 减少数量
$('.m-icons-reduce').on('click', function () {
    var addvalue = $(this).parents('.cart-good-item').find('.num-reduce-add span').html();
    addvalue--;
    if (addvalue <= 0) {
        addvalue = 1;
    }
    $(this).parents('.cart-good-item').find('.num-reduce-add span').html(addvalue);
    $(this).parents('.cart-good-item').find('.subtotal span').html(calcsingleprice($(this)));
    totalprice();
    changecookie($(this));
});


$('.num-reduce-add span').on('input', function () {
    var reg = /^\d+$/g;
    if (reg.test($(this).val())) {
        var $value = $(this).val();
        if ($value > 99) {
            $(this).val(99);
        } else if ($value <= 0) {
            $(this).val(1);
        } else {
            $(this).val($value);
        }
    } else {
        $(this).val(1);
    }
    $(this).parents('.cart-good-item').find('.subtotal span').html(calcsingleprice($(this)));
    totalprice();
    changecookie($(this));
});

//封装函数实现价格的计算
function calcsingleprice(obj) {
    var $singleprice = parseFloat(obj.parents('.cart-good-item').find('.price span').html());
    var $addvalue = parseInt(obj.parents('.cart-good-item').find('.num-reduce-add span').html());
    return ($singleprice * $addvalue).toFixed(2);
}
// 计算总价

function totalprice(){
    var allprice=0;
    var allcount=0;
    $('.cart-good-item:visible').each(function(){
        if($(this).find('input:checkbox').prop('checked')){
            allprice+=parseFloat(parseFloat($(this).find('.subtotal  span').html()).toFixed(2));
            allcount+=parseInt($(this).find('.num-reduce-add span').html());
        }
        console.log(parseFloat($(this).find('.subtotal  span').html()));
        console.log(parseInt($(this).find('.num-reduce-add span').html()));
    });
    $('.total-after-prefer').html('￥' + allprice+'.00');
    // console.log(allprice);
    $('.already-select').html(allcount);
}

//将cookie值取出，转换成数组。
var sidarr = [];//商品的编号
var numarr = [];//商品的数量
function cookietoarray() {
    if (getcookie('cooksid') && getcookie('cookienum')) {
        sidarr = getcookie('cooksid').split(',');
        numarr = getcookie('cookienum').split(',');
    }
}

//将改变的值存放到cookie里面。
//将当前改变数量的商品列表下面找到对应的id和cookie里面的sid比较找到位置，通过位置找到数量数组中的位置，进行重新赋值
function changecookie(obj) {
    cookietoarray();
    var sid = obj.parents('.cart-good-item').find('.image img').attr('sid');
    numarr[$.inArray(sid, sidarr)] = obj.parents('.cart-good-item').find('.num-reduce-add span').html();
    addcookie('cookienum', numarr.toString(), 7);
}


//7.删除
$('.cart-good-item').on('click', '.del a', function () {//$(this)-->.b-action a
    // 第二个参数是时间委托
    if (window.confirm('你确定要删除吗？')) {
        $(this).parents('.cart-good-item').remove();
        deletecookie($(this).parents('.cart-good-item').find('.image img').attr('sid'), sidarr);
    }
});


$('.operation a').first().on('click', function () {
    if (window.confirm('你确定要删除吗？')) {
        $('.cart-good-item:visible').each(function (index, ele) {
            if ($(ele).find('input:checkbox').is(':checked')) {
                $(this).remove();
                deletecookie($(this).find('.image img').attr('sid'), sidarr);
            }
        });
    }
});

function deletecookie(sid) {
    cookietoarray();
    var $index = $.inArray(sid, sidarr);
    console.log($index);
    sidarr.splice($index, 1);
    numarr.splice($index, 1);
    addcookie('cooksid', sidarr.toString(), 7);
    addcookie('cookienum', numarr.toString(), 7);
}

