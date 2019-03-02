            var $sid=location.search.substring(1).split('=')[1];
            // console.log($sid);
			$.ajax({
				url:'//10.31.162.124:8088/js1810/project/php/mdetail.php',
				data:{
					sid:$sid
				},
                dataType:'json',
			}).done(function(data){
				$('.pics').attr('src',data.url);
                $('.goodname').html(data.title);
                $('.bigpic img').attr('sid',data.sid);
                $('.value').html(data.price);
                // 通过将其转化为数组，然后遍历这个数组
				var arrpic=data.urls.split(',');
                // console.log(arrpic);
				var strhtml='';
				$.each(arrpic,function(index,value){
					strhtml+=`<li class="small-pic" style="border-color: rgb(236, 236, 236);">
                    <img src="${value}"></li>`;
                });
				
				$('.sma-container').html(strhtml);
            })
            .fail(function(){
                console.log(123456);
            });

            // 点击加入购物车按钮。
			var sidarr=[];//商品的编号
			var numarr=[];//商品的数量
			
			if(getcookie('cooksid') && getcookie('cookienum')){
				sidarr=getcookie('cooksid').split(',');
				numarr=getcookie('cookienum').split(',');
			}
			
			console.log(getcookie('cookienum'));
            console.log(getcookie('cooksid'));
            // 点击改变数量
            //改变商品数量++
            $('.m-icons-add').on('click', function() {
                var $count = $(this).parents('.count-container').find('.count-input').val();//值
                $count++;
                if ($count >= 99) {
                    $count = 99;
                }
                $(this).parents('.count-container').find('.count-input').val($count);//赋值回去
                setcookie($(this));//将改变的数量重新添加到cookie
                
            });
            // 点击改变商品数量--
            $('.m-icons-reduce').on('click', function() {
                var $count = $(this).parents('.count-container').find('.count-input').val();
                $count--;
                if ($count <= 1) {
                    $count = 1;
                }
                $(this).parents('.count-container').find('.count-input').val($count);
                setcookie($(this));//将改变的数量重新添加到cookie
            });
            var arrsid=[]; //商品的id
	       var arrnum=[]; //商品的数量

            function cookietoarray(){
                if(getcookie('cookiesid') && getcookie('cookienum')){
                    arrsid=getcookie('cookiesid').split(',');//cookie商品的sid  
                    arrnum=getcookie('cookienum').split(',');//cookie商品的num
                }
            }
            function setcookie(obj) { //obj:当前操作的对象
                cookietoarray();//得到数组
                var $index = obj.parents('.goods-item').find('img').attr('sid');//通过id找数量的位置
                arrnum[$.inArray($index,arrsid)] = obj.parents('.goods-item').find('.quantity-form input').val();
                addcookie('cookienum', arrnum.toString(), 7);
            }


            // 判断商品存在与否，然后添加cookie,dian
			$('.m-btn-brown').on('click',function(){
				if($.inArray($sid,sidarr)==-1){//不存在
                    sidarr.push($sid);
                    //   获取数量
					numarr.push($('.count-input').val());
					addcookie('cooksid',sidarr.toString(),7);
					addcookie('cookienum',numarr.toString(),7);
				}else{//存在
					console.log(numarr[$.inArray($sid,sidarr)]);//已经存在的值
					var newnum=parseInt($('.count-input').val())+parseInt(numarr[$.inArray($sid,sidarr)]);
                    numarr[$.inArray($sid,sidarr)]=newnum;
                    $('m-icons-reduce').parents('.count-container').find('.count-input').val(newnum);
					addcookie('cookienum',numarr.toString(),7);
				}
			});