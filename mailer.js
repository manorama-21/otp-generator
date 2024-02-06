nodemailer =require("nodemailer");
otp =require('./index.js')

sendMail = async(mail,otp)=>{

// sendMail = async(mail,body)=>{
    transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
       secure: true,
        auth: {
            user: 'manorama210688@gmail.com',
            pass:'gqpd xpxu mhaf kcvh'
        }
    })
// } 

mail ={
    from:'manorama210688@gmail.com',
    to:'90kumarimanu@gmail.com',
    subject:'OTP',
    text:`Your otp is:  ${genotp()}`,
    // attachment:[
    //     {
    //         filename:'otp.text',
    //         path:__dirname +'/otp.txt',
    //         content:'Your otp is: '
    //     }
    // ]

}

transporter.sendMail(mail,(err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
};
