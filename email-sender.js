
// 5- Dans cette tâche, vous allez :
// Créez un fichier nommé email-sender
// npm install nodemailer 
// (https://www.w3schools.com/nodejs/nodejs_email.asp)
// Essayez d’envoyer votre propre e-mail en utilisant ce

const nodeMailer = require('nodemailer')


let transporter = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user: '', //email
        pass:'' //email
    }  
});

let mailOptions = {
    from:'', //email
    to:'', // email
    subject:'test de sendmailer',
    text:'hello world?'
};

transporter.sendMail(mailOptions,(erreur, info)=>{
    if (erreur) {
        console.log('Error occurred: %s', erreur.message);
        return;
    }
    if (info) {
        console.log('Message sent: %s', info.messageId);
    } else {
        console.log('No info object received');
    }
    
})



