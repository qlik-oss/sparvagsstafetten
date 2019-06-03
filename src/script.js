require('./gtag');

// google analytics:
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); };
gtag('js', new Date());
gtag('config', 'UA-141302645-1');

// cookie consent:
require('../node_modules/cookieconsent/build/cookieconsent.min.js');
window.cookieconsent.initialise({
    "palette": {
        "popup": {
            "background": "#000"
        },
        "button": {
            "background": "#f1d600"
        }
    },
  "content": {
    "message": "Denna webbplats använder cookies för att leverera bästa möjliga upplevelse till dig.",
    "dismiss": "OK",
    "link": "Läs mer",
    "href": "https://pts.se/sv/privat/internet/integritet/kakor-cookies/"
  },
});
