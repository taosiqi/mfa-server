var express = require('express');
var router = express.Router();
var notp = require('notp');
var base32 = require('thirty-two');
// const { v4: uuidv4 } = require('uuid');
// OTP 是 One-Time Password的简写，表示一次性密码。
// HOTP 是HMAC-based One-Time Password的简写，表示基于HMAC算法加密的一次性密码。
// 是事件同步，通过某一特定的事件次序及相同的种子值作为输入，通过HASH算法运算出一致的密码。
// TOTP 是Time-based One-Time Password的简写，表示基于时间戳算法的一次性密码。
// 是时间同步，基于客户端的动态口令和动态口令验证服务器的时间比对，一般每60秒产生一个新口令，要求客户端和服务器能够十分精确的保持正确的时钟，客户端和服务端基于时间计算的动态口令才能一致

/* GET users listing. */
router.get('/', function(req, res, next) {
  // // 生成hotp
  // var key = '01536ebb-5870-4fe2-80ff-b818c435e792';
  // var encoded = base32.encode(key);
  // console.log(encoded)
  // var encodedForGoogle = encoded.toString().replace(/=/g,'');
  // var uri = 'otpauth://hotp/taosiqi?issuer=ACME&secret=' + encodedForGoogle;
  // console.log('uri',uri)
  //
  // // 解密hotp
  // var key = '01536ebb-5870-4fe2-80ff-b818c435e792'; //用户生成的密钥，需要计入数据库
  // var token = '763274'; //app上面的
  // var login = notp.hotp.verify(token, key);
  // console.log('login',login);
  // console.log('key',notp.hotp.gen( key,{counter:0}))  //用户每点击一次app上面的刷新，这里应该记录下来，这里只能自己写app，谷歌那里拿不到回调 同步计数器


  // // 生成totp
  var key = '01536ebb-5870-4fe2-80ff-b818c435e795';
  var encoded = base32.encode(key);
  console.log(encoded.toString())
  var encodedForGoogle = encoded.toString().replace(/=/g,'');
  var uri = 'otpauth://totp/taosiqi1?secret=' + encodedForGoogle;
  console.log('uri',uri)

  // 解密totp
  console.log(base32.decode(encodedForGoogle).toString())
  var key = base32.decode(encodedForGoogle).toString(); //用户生成的密钥，需要计入数据库
  var token = '833942'; //app上面的app上面的
  var login = notp.totp.verify(token, key); //{time:60} 改为60s一次
  console.log('login',login);
  console.log('key',notp.totp.gen(key))
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/uuid', function(req, res, next) {
  res.send(uuidv4()); //01536ebb-5870-4fe2-80ff-b818c435e795
});

module.exports = router;
