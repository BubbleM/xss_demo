var express = require('express');
var router = express.Router();

var comment = {};
function html_encode(str){ /*编码*/
	var s = '';
	if(str.length == 0) return "";
	s = str.replace(/&/g,"&gt;");
	s = s.replace(/</g,"&lt;");
	s = s.replace(/>/g,"&gt;");
	s = s.replace(/\s/g,"&nbsp;");
	s = s.replace(/\'/g,"&#39;");
	s = s.replace(/\"/g,"&quot;");
	s = s.replace(/\n/g,"<br>");
	return s;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});//解析xss
});

router.get('/comment',function(req,res,next){//给用户一个发送请求的接口
	comment.v = html_encode(req.query.comment);//用户的原始输入req.query.comment通过编码放在缓存中
});

router.get('/getComment',function(req,res,next){//获取评论的接口
	res.json({
		comment:comment.v
	})
});

module.exports = router;
