// 1- Dans cette tâche, vous allez :
// Créez un fichier nommé hello-world.js
// Écrire un programme pour imprimer « HELLO WORLD » sur la console

// console.log("HELLO WORLD")

// 2- Dans cette tâche, vous devrez :
// Créer un serveur
// Écrivez un programme qui s’exécute sur le port 3000 et qui répond par 
// '<h1>Hello Node !!! </h1>\n’lorsque quelqu’un atteint http://localhost:3000

// var http = require('http')

// const serveur = http.createServer((request, reponse)=>{

//     reponse.setHeader("content-typpe", "text/html")
//     reponse.write("<head> <meta charset = 'UTF-8'> </head>")

//     if(request = "http://localhost:3000"){
//        reponse.write("<h1>Hello Node !!! </h1>")
//     }else{
//         reponse.write("<h1>404 introuvable</h1><p>url non invalide</p>")
//     }
//     reponse.end();
// });
// serveur.listen(3000, "localhost", ()=>{
//     console.log('pret a ecouter les requetes du port 3000');
// })


// 3- Dans cette tâche, vous allez :
// Tout d’abord, demandez au système de fichiers de créer un fichier 
// nommé « welcome.txt » contenant une ligne « Hello Node ».
// Deuxièmement, créez un programme qui lit et console.log des données à partir de hello.txt

// var fs = require('fs')
// fs.writeFile('welcome.txt','Hello Node', function(erreur){
//     if(erreur){
//         console.log(erreur);
//     }
// })

// fs.readFile('welcome.txt', function(erreur,donnee){
//     if(erreur){
//         console.log(erreur)
//     }
//     console.log(donnee.toString());
// })


// 4- Dans cette tâche, vous allez :
// Créez un fichier nommé « password-generator »
// (utilisez npm install generate-password :
//      (https://www.npmjs.com/package/generate-password)
// Créez une fonction qui génère des mots de passe 
// aléatoires et console.log() ce mot de passe.

// var uuid = require('uuid')

// console.log(uuid.v4())



