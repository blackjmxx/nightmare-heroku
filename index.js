const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });

const URL = 'https://www.zalando.fr/pier-one-chemise-dark-blue-pi922da2u-k11.html';
console.log('Welcome to Nightmare scrape\n==========');

nightmare
    .goto(URL)
    .wait('.post-title')
    .evaluate(() => document.querySelector('.post-title').textContent)
    .end()
    .then((result) => {
        console.log(result);
        console.log('=========\nAll done');
    })
    .catch((error) => {
        console.error('an error has occurred: ' + error);
    })
    .then(() => (console.log('process exit'), process.exit()));
