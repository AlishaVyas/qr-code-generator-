/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/



// DATE : 9 DEC 2024

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";
import { writeFile } from 'node:fs';

inquirer
  .prompt([
    {
      "type" : "String",
      "message" : "enter the URL ",
      "name" : "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers.URL);
    
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));  

    fs.writeFile('message.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }); 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error)
    } else {
      // Something else went wrong
      console.log("something went wrong")
    }
  });








// import inquirer from 'inquirer';
// import qr from 'qr-image';
// import fs from 'fs';
// // var qr = require('qr-image');

// inquirer
//   .prompt([
//     {
//         message: "Type your URL here : ",
//         name:"URL",
//     }
//   ])
//   .then((answers) => {
//     const url = answers.URL;
//     var qr_svg = qr.image(url);
//     qr_svg.pipe(fs.createWriteStream("qr_img.png"));
//     writeFile('URL.txt', url, (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//       });   

//     })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });