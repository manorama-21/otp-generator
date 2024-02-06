const SendmailTransport = require('nodemailer/lib/sendmail-transport/index.js');

express = require('express');
otp =require('./index.js');
mailer = require('./mailer.js');

app= express();
app.use(express.json());

app.post('/send', async(req,res)=>{
    mail ='manorama210688@gmail';
    OTp= genotp()
    await sendMail(mail,OTP)
    res.send('mail successfully npm send')
})

app.send('/verify',async(req,res)=>{
    userOTP=req.user
})