const nodemailer = require('nodemailer')
const { google } = require('googleapis') 
const { OAuth2 } = google.auth
const OAUTH_LINK = "https://developers.google.com/oauthplayground"

const {EMAIL,MAILING_ID,MAIL_SECRETCODE,REFRESH_TOKEN} = process.env


const auth = new OAuth2 (
    MAILING_ID,
    MAIL_SECRETCODE,
    REFRESH_TOKEN,
    OAUTH_LINK,
)

// Email-varification proccess

exports.sendEmailvarification = (email,name,url)=>{
    auth.setCredentials({
        refresh_token: REFRESH_TOKEN
    })

    const accesToken = auth.getAccessToken()

    const stmp = nodemailer.createTransport({
        service : "gmail",
        auth    : {
            type    : "OAuth2",
            user    : EMAIL,
            clientId    : MAILING_ID,
            clientSecret    : MAIL_SECRETCODE,
            refreshToken    : REFRESH_TOKEN,
            accesToken,
        }
    });

    const mailOptions = {
        from    : EMAIL,
        to  :   email,
        subject : "SYE account varification",
        html    : `<div style="display:flex;justify-content:center;align-items:center;background-color:#effffd;height:100vh"><div style="width:600px"><h3 style="font-weight:700;color:#5093f3;font-size:70px;font-family:Arial,Helvetica,sans-serif;margin-bottom:0;text-align:center">SYE</h3><h4 style="font-size:16px;font-family:Arial,Helvetica,sans-serif;color:#66717f;text-align:center">Action Required: Activate your SYE account</h4><div style="border:1px solid #e6e6e6;padding:20px;border-radius:10px"><h2 style="font-family:Arial,Helvetica,sans-serif;color:#151515;margin-top:3px">Hello ${name}</h2><p style="font-size:16px;font-weight:500;font-family:Arial,Helvetica,sans-serif;color:#66717f">You recently created an account on SYE.To complete your registration please confirm your account.</p><a href=${url} style="color:#effffd;padding:12px;background-color:#5093f3;border-radius:5px;text-decoration:none;text-transform:capitalize;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:400;display:inline-block">confirm your account</a></div></div></div>`
    };

    stmp.sendMail(mailOptions,(err,res)=>{
        if(err) {
            return err;
        }
        else{
            return res;
        }
    })
}