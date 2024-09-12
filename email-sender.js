
// 5- Dans cette tâche, vous allez :
// Créez un fichier nommé email-sender
// npm install nodemailer 
// (https://www.w3schools.com/nodejs/nodejs_email.asp)
// Essayez d’envoyer votre propre e-mail en utilisant ce

const nodemailer = require('nodemailer');

// un transporteur réutilisable avec les informations de  service de messagerie
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '', // adresse e-mail
    pass: '' //  mot de passe
  }
});

// Définissez les options de l'e-mail
let mailOptions = {
  from: '',
  to: '',
  subject: 'Test d\'envoi d\'e-mail avec Nodemailer',
  text: 'bonjour'
};

// Envoyez l'e-mail
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    return console.log(error);
  }
  console.log('E-mail envoyé: ' + info.response);
});

