; (function () {
    var $tel = $('.tel');
    var $oSpan = $('.telspan');
    var $pwd = $('.r-pwd input');
    var $pSpan = $('.pwdspan');
    var $repwd = $('.r-true input');
    var $reSpan = $('.respan');
    var $form1 = $('#form1');
    var tellock = true;
    var pwdflag = true;
    $tel.on('focus', function () {
        if ($(this).val() == '') {
            // console.l('嘻嘻');
            $oSpan.html('请输入正确的电子邮箱');
            $oSpan.css('color', '#ccc');
        }
    });
    $tel.on('blur', function () {
        $.ajax({
            type: 'post',
            url: 'http://10.31.162.124:8088/js1810/project/php/reg.php',
            data: {
                telphone: $tel.val()
            },
            success: function (data) {//后端返回的值
                // console.log(data);
                if (!data) {
                    // 如果没有返回数据，就勾选，
                    $oSpan.html('该手机号码已被占用');
                    $oSpan.css('color', "red");
                    tellock = false;
                } else {
                    // 如果有
                    if ($tel.val() != '') {
                        var email = /(\w[\w\-\.\_]+)\@(\w[\w\-\.\_]+)\.(\w[\w\_\.\-]+)/;
                        var restel = /^1[3568]\d{9}$/;
                        if (restel.test($tel.val()) || email.test($tel.val())) {
                            // 验证通过，则显示对号
                            $oSpan.html('√');
                            $oSpan.css('color', "green");
                            tellock = true;
                        }
                        else {
                            $oSpan.html('手机号码或者邮箱格式不正确，请重新输入！');
                            $oSpan.css('color', 'red');
                            tellock = false;
                        }
                    }
                    else {
                        $oSpan.html('手机号码或者邮箱不能为空');
                        $oSpan.css('color', 'red');
                        tellock = false;
                    }
                }
            }
        })
    });
    $pwd.on('focus', function () {
        if($(this).val()==''){
            $pSpan.html('请输入8-14位由数字字母及其他字符组成密码');
            $pSpan.css('color','#ccc');
        }
    });
    $pwd.on('blur', function () {
        if ($(this).val() != '') {
            // 输入密码验证不为空且不为空的情况下
            if (pwdflag) {
                console.l(4);
                $pSpan.html('√');
                $pSpan.css('color', 'green');
                pwdflag = true;
                // 此时验证通过
            }
            else  {
                console.l(5);
                $pSpan.html('密码太简单了！');
                $pSpan.css('color', "red");
                pwdflag = false;
            }
        }
        else {
            console.l(6);
            $pSpan.html('密码不能为空！');
            $pSpan.css('color', "red");
            pwdflag = false;
        }
    });
    $pwd.on('input', function () {
        var regnum = /\d+/;
        var reglowercase = /[a-z]+/;
        var reguppercase = /[A-Z]+/;
        var other = /[^\da-zA-Z]+/;
        var num = 0;
        if ($pwd.val().length >= 6 && $pwd.val().length <= 16) {
            console.l(1);
            if (regnum.test($pwd.val())) {
                num++;
            }
            if (reglowercase.test($pwd.val())) {
                num++;
            }
            if (reguppercase.test($pwd.val())) {
                num++;
            }
            if (other.test($pwd.val())) {
                num++;
            }
            switch (num) {
                case 1: $pSpan.html('弱'),$pSpan.css('color', "red"), pwdflag = false; break;
                case 2:  console.l(3);
                case 3:  $pSpan.html('中'),$pSpan.css('color', "orange"), pwdflag = true; break;
                case 4:  $pSpan.html('强'),$pSpan.css('color', "green"),pwdflag = true; break;
                default: break;
            }
        }
        else {
            console.l(2);
            $pSpan.html('密码长度要在6-16个字符之间！');
            $pSpan.css('color', "red");
            pwdflag = false;
        }
    });

    // 确认密码
    $repwd.on('focus', function () {
        if ($(this).val() == '') {
            $reSpan.html('密码不能为空！');
            $reSpan.css('color', 'red');
        }
    });
    $repwd.on('change', function () {
        if ($(this).val() == $pwd.val()) {
            $reSpan.html('√');
            $reSpan.css('color', 'green');
        }
        else {
            $reSpan.html('和第一次输入的密码不一致，请重新输入！');
            $reSpan.css('color', 'red');
            pwdflag = false;
        }
    });

    $form1.on('submit', function () {
        if (!tellock || !pwdflag) {
            return false;
        }
    });
})()