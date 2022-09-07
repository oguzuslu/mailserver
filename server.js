const express = require('express');
//const SMTPPool = require('nodemailer/lib/smtp-pool');
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.static('public')),
    app.use(express.json())
var url = require('url');
console.log('geldddii');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})
app.get('/invite', (req, res) => {
    res.sendFile(__dirname + '/public/invite.html')
})
app.get('/en', (req, res) => {
    res.sendFile(__dirname + '/public/index-EN.html')
})

app.post('/send-email', (req, res) => {
    console.log("send mail isteğine geldim.");
    const transporter = nodemailer.createTransport({
        service: 'gmail',

        auth: {
            user: "spinigoo@gmail.com",
            pass: "vdqhiijbvofjtswl"
        }

        // service: 'gmail',//mail.eralpsoftware.com
        // //pool: true,
        // port: 587,
        // secure: false, // upgrade later with STARTTLS
        // //secure: true,
        // auth: {
        //     user: "spinigoo@gmail.com",
        //     pass: "EralpTeam123",
        // },
        // tls: {
        //     // do not fail on invalid certs
        //     rejectUnauthorized: false,
        // },
    })

    if (req.body.phone) {
        // console.log('registerr');
        const mailOptions = {
            from: req.body.email,
            to: 'spinigoo@gmail.com',
            subject: `Registration: ${req.body.subject}`,
            text: `Name :${req.body.namee} \r\nMail :${req.body.email} \r\nPhone Number : ${req.body.phone} \r\nCompany Name : ${req.body.companyname} \r\nMessage : ${req.body.message}`
        }
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.send('error')
            } else {
                console.log('Email sent: ' + info.response);
                res.send('success')

            }
        })

    } else if (!req.body.phone) {
        // console.log('standart');
        const mailOptions = {
            from: req.body.email,
            to: 'spinigoo@gmail.com',
            subject: `Standard: ${req.body.subject}`,
            text: `Name :${req.body.namee} \r\nMail :${req.body.email} \r\nMessage : ${req.body.message}`
        }
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.send('error')
            } else {
                console.log('Email sent: ' + info.response);
                res.send('success')

            }
        })
    }

})
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})