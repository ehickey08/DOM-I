const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//create the navbar links with text, and set color to green
let navLinks = document.querySelectorAll('nav a');
navLinks.forEach((el, index) => el.textContent = siteContent['nav']['nav-item-'+(index+1)])
navLinks.forEach(el => el.style.color = 'green');
 //add to items, one at the beginning, one at the end for the navbar
let navBar = document.querySelector('header nav'); //get parentEl for nav items
let lastChild = document.createElement('a');
lastChild.textContent='Last';
lastChild.style.color = 'green';
navBar.appendChild(lastChild); //add last element to navbar

let firstChild = document.createElement('a');
firstChild.textContent = 'First';
firstChild.style.color = 'green';
navBar.prepend(firstChild); //add first element to navbar


let cta_heading = document.querySelector('.cta-text h1');
cta_heading.textContent = "DOM Is Awesome";

let cta_button = document.querySelector('.cta-text button')
cta_button.textContent = "Get Started";

let cta_image = document.querySelector('#cta-img');
cta_image.setAttribute('src', siteContent["cta"]["img-src"]);

let main_headings = document.querySelectorAll('.main-content h4')
main_headings[0].textContent = siteContent['main-content']['features-h4'];
main_headings[1].textContent = siteContent['main-content']['about-h4'];
main_headings[2].textContent = siteContent['main-content']['services-h4'];
main_headings[3].textContent = siteContent['main-content']['product-h4'];
main_headings[4].textContent = siteContent['main-content']['vision-h4']

let main_paras = document.querySelectorAll('.main-content p');
main_paras[0].textContent = siteContent['main-content']['features-content'];
main_paras[1].textContent = siteContent['main-content']['about-content'];
main_paras[2].textContent = siteContent['main-content']['services-content'];
main_paras[3].textContent = siteContent['main-content']['product-content'];
main_paras[4].textContent = siteContent['main-content']['vision-content']

let middle_image = document.querySelector('#middle-img');
middle_image.setAttribute('src', siteContent['main-content']['middle-img-src']);

let contact_heading = document.querySelector('.contact h4')
contact_heading.textContent = siteContent['contact']['contact-h4'];

let contact_lines = document.querySelectorAll('.contact p');
contact_lines[0].textContent = siteContent['contact']['address'];
contact_lines[1].textContent = siteContent['contact']['phone'];
contact_lines[2].textContent = siteContent['contact']['email'];

let copyright = document.querySelector('footer p');
copyright.textContent = siteContent['footer']['copyright'];

//Stretch Goals: Change some styling

middle_image.style.borderRadius = '10px';
main_paras[3].style.backgroundColor = 'rgba(200,200,200,0.5)'
cta_image.style.background = 'linear-gradient(rgba(255, 0, 0, 0.45), rgba(0, 255, 0, 0.45))';

//Create an EventListener for the button
cta_button.addEventListener('click', (event) => {
    cta_heading.style.backgroundImage = 'radial-gradient(red,yellow,green)';
    cta_heading.style.borderRadius = '20px';
});

//create a new div for key listener
let keyListener = document.createElement('div');
keyListener.style.fontSize = '0.85rem';
keyListener.style.marginTop = '1rem';
keyListener.textContent = "Press a key:";

let cta_text = document.querySelector('.cta-text'); //get parent Element for the keyListener div
cta_text.appendChild(keyListener); //add keylistener Div

//create a function to record the key
let recordKey = function(e) {
    keyListener.textContent = `${e.code}`;
}

document.addEventListener('keydown', recordKey);

//use arrow function to reset the keyListener div
document.addEventListener('keyup', (event) => {
    keyListener.textContent = 'Press a key';
})


