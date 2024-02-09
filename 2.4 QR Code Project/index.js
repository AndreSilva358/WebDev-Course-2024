/* 
import 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image'

console.log 

inquirer
  .prompt([
    {message: "What will the URL be?",
    name: "URL",
    }
])
  .then((answers) => {
      const url = answers.URL
      var qr_svg = qr.image('URL', { type: 'svg' });
      qr_svg.pipe(require('fs').createWriteStream('URL.svg'));
    
      fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('Your file has been saved.');
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

 
var svg_string = qr.imageSync('URL', { type: 'svg' });