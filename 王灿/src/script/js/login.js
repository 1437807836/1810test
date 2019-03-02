; (function () {
    var $user = $('.l-phone input');
    var $pass = $('.l-pwd input');
    var $span = $('.error .error-con');
    var $login = $('.loginer input');
    $login.on('click', function () {
        $.ajax({
            type: 'post',
            url: 'http://10.31.162.124:8088/js1810/project/php/login.php',
            data: {
                telphone: $user.val(),
                password: $pass.val()
            },
            success: function (data) {
                console.log(123);
                if (!data) {
                    alert('登陆失败');
                    $span.html('用户名错误');
                    $pass.val('');
                } else {
                    location.href = '../src/index.html';
                    addcookie('username', $user.val());
                }
            }
        });
    });
})()