var express = require('express');
var router = express.Router();
var notp = require('notp');
var base32 = require('thirty-two');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // 生成
  // var key = '132323412dsfsfsdsdfsdf';
  // var encoded = base32.encode(key);
  // console.log('encoded',encoded)
  // var encodedForGoogle = encoded.toString().replace(/=/g,'');
  // console.log('encodedForGoogle',encodedForGoogle)
  // var uri = 'otpauth://totp/taosiqi?secret=' + encodedForGoogle;
  // console.log('uri',uri)

  // 解密
  var key = '132323412dsfsfsdsdfsdf'; //用户生成的密钥，需要计入数据库
  var token = '783139'; //app上面的
  var login = notp.totp.verify(token, key,{});
  console.log(notp.totp.gen( key))
  // { delta: -6 }已经经过了几次
  console.log(login)



  res.send('respond with a resource');
});

module.exports = router;
