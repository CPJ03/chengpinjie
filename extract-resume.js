const fs = require('fs');
const pdf = require('pdf-parse');

const pdfPath = './public/assets/CV - SE.pdf';

fs.readFile(pdfPath, (err, dataBuffer) => {
    if (err) {
        console.error('Error reading PDF:', err);
        return;
    }

    pdf(dataBuffer).then(data => {
        console.log('=== EXTRACTED TEXT FROM RESUME ===\n');
        console.log(data.text);
        console.log('\n=== END OF RESUME ===');
    }).catch(error => {
        console.error('Error parsing PDF:', error);
    });
});
