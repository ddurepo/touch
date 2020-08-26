var nodemailer  = require('nodemailer');

var mailTransport = nodemailer.createTransport({
    host : 'smtp.sina.com',
    secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
    auth : {
        user : '你的邮箱地址',
        pass : '你的邮箱授权码'
    },
});

var mailTransport = nodemailer.createTransport('SMTP', {
    host : 'smtp.sina.com',
    secureConnection: true, // use SSL
    auth : {
        user : '你的邮箱地址',
        pass : '你的邮箱授权码'
    },
});


var options = {
    from        : '"你的名字" <你的邮箱地址>',
    to          : '"用户1" <邮箱地址1>, "用户2" <邮箱地址2>',
    // cc         : ''  //抄送
    // bcc      : ''    //密送
    subject        : '一封来自Node Mailer的邮件',
    text          : '一封来自Node Mailer的邮件',
    html           : '<h1>你好，这是一封来自NodeMailer的邮件！</h1><p><img src="cid:00000001"/></p>',
    attachments : 
                [
                    {
                        filename: 'img1.png',            // 改成你的附件名
                        path: 'public/images/img1.png',  // 改成你的附件路径
                        cid : '00000001'                 // cid可被邮件使用
                    },
                    {
                        filename: 'img2.png',            // 改成你的附件名
                        path: 'public/images/img2.png',  // 改成你的附件路径
                        cid : '00000002'                 // cid可被邮件使用
                    },
                ]
};

mailTransport.sendMail(options, function(err, msg){
    if(err){
        console.log(err);
        res.render('index', { title: err });
    }
    else {
        console.log(msg);
        res.render('index', { title: "已接收："+msg.accepted});
    }
});
