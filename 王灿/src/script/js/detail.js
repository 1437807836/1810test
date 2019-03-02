!function(){
    //1.拼接数据
    // alert('xixi');
	$.ajax({
		url:'../php/index.php',
		dataType:'json'
	}).done(function(data){
        var $oImg=$('.section-22').find('.img-container img');
        var $oTitle=$('.section-22 .pro-info');
         var $html='';
        
        $.each(data,function(index,value){
            $html+=`<div class="m-goods-item-container pro-item-category f1">
                <a href="detail.html?sid=${value.sid}" target="_blank">
                <!-- 上层图片 -->
                    <div class="category-img-container">
                        <!-- 图片 -->
                        <div class="product-img">
                            <div class="m-product-image-container undefined"
                                style="width: 264px; height: 198px;">
                                <div class="img-container"
                                    style="width: 124px; height: 125px;padding: 45px 70px 28px; ">
                                    <img data-original="${value.url}"  class="lazy"
                                        alt="云米互联网浴霸 风暖触控版"
                                        style="height: 125px; width: 125px; margin-left: -0.5px;">
                                </div>
                            </div>
                        </div>
                        <!-- 描述 -->
                        <p class="pro-desc">暖风温度调温度可机，24...</p>
                    </div>
                    <!-- 选择小标签 -->
                    <!-- 价格 详细说明 -->
                    <div class="category-box">
                        <div class="m-goods-common-tag-con"></div>
                        <p class="pro-info" title="云米互联网浴霸 风暖触控版">${value.title}</p>
                        <p class="pro-price">
                            <span class="pro-unit">¥</span>
                            <span class="m-num">${value.price}</span>
                        </p>    
                    </div>  
                </a>
             </div>`;
            $('.section-22 .m-product-list').html($html);
            // $oImg.eq(index).attr('src',value.url);
            // $oTitle.eq(index).html(value.title);
            // $oPrice.eq(index).html(value.price);
            // console.log($oImg.eq(index).attr('src'));
            // console.log($oTitle.eq(index).html());
            // console.log($oPrice.eq(index).html());
        });
        $.each(data,function(index,value){
            $html+=`<div class="m-goods-item-container pro-item-category f1">
                <a href="detail.html?sid=${value.sid}" target="_blank">
                <!-- 上层图片 -->
                    <div class="category-img-container">
                        <!-- 图片 -->
                        <div class="product-img">
                            <div class="m-product-image-container undefined"
                                style="width: 264px; height: 198px;">
                                <div class="img-container"
                                    style="width: 124px; height: 125px;padding: 45px 70px 28px; ">
                                    <img data-original="${value.url}" src="${value.url}" class="lazy"
                                        alt="云米互联网浴霸 风暖触控版"
                                        style="height: 125px; width: 125px; margin-left: -0.5px;">
                                </div>
                            </div>
                        </div>
                        <!-- 描述 -->
                        <p class="pro-desc">暖风温度调温度可机，24...</p>
                    </div>
                    <!-- 选择小标签 -->
                    <div class="m-goods-pro-tag-con">4色可选</div>
                    <!-- 价格 详细说明 -->
                    <div class="category-box">
                        <div class="m-goods-common-tag-con"></div>
                        <p class="pro-info" title="云米互联网浴霸 风暖触控版">${value.title}</p>
                        <p class="pro-price">
                            <span class="pro-unit">¥</span>
                            <span class="m-num">${value.price}</span>
                        </p>    
                    </div>  
                </a>
             </div>`;
            $('.section-22 .m-product-list').html($html);
		});
	}).fail(function(){
        console.log("1231231233")
    });
}();
