/* CHANGE TEXT IN MAIN SECTION
We are going to have 3 different variations so we are putting them in an array and displaying different variation every 3 seconds */

const inputText = document.getElementById('loop-text');

const textArray = ['reimbursements', 'expense reports', 'chasing receipts'];

function textLoop(i) {

    if (textArray.length > i) {
        setTimeout(function() {
            inputText.textContent = textArray[i];
            textLoop(++i);
        }, 3000);

    } else if (textArray.length == i) {
        textLoop(0);
    }

}

textLoop(0);


// Changing Tabs on click
const ceo = document.querySelector('.for-ceo');
const cfo = document.querySelector('.for-cfo');
const employee = document.querySelector('.for-employee');

const ceoSection = document.querySelector('#ceo');
const cfoSection = document.querySelector('#cfo');
const employeeSection = document.querySelector('#employee');

cfo.addEventListener('click', changeTabCfo);

function changeTabCfo(){
    if(cfoSection.classList.contains('inactive')){
        cfoSection.classList.remove("inactive");
        cfo.classList.add('tabs-active');

        ceoSection.classList.add('inactive');
        ceo.classList.remove('tabs-active');

        employeeSection.classList.add('inactive');
        employee.classList.remove('tabs-active');
    }
}

ceo.addEventListener('click', changeTabCeo);

function changeTabCeo(){
    if(ceoSection.classList.contains('inactive')){
        ceoSection.classList.remove("inactive");
        ceo.classList.add('tabs-active');

        cfoSection.classList.add('inactive');
        cfo.classList.remove('tabs-active');

        employeeSection.classList.add('inactive');
        employee.classList.remove('tabs-active');
    }
}

employee.addEventListener('click', changeTabEmployee);

function changeTabEmployee(){
    if(employeeSection.classList.contains('inactive')){
        employeeSection.classList.remove("inactive");
        employee.classList.add('tabs-active');

        cfoSection.classList.add('inactive');
        cfo.classList.remove('tabs-active');

        ceoSection.classList.add('inactive');
        ceo.classList.remove('tabs-active');
    }
}

/* FAQ - show up answer on click
First we are going to 'pick up' all element with the class 'question' and loop them with the for loop. Based on the question that user has click on, we are going to display answer for that question */

const acc = document.getElementsByClassName("question");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("faq-active");
    const answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } 
  });
}


// CLOSE SALE BANNER
const close = document.querySelector('.close');
const sale = document.querySelector('.sale');

close.addEventListener('click', closeBanner);

function closeBanner(){
    sale.classList.add('inactive');
}


/* HAMBURGER MENU
We are going to add class to the header element and based on that change the css when menu is active on mobile and tablet */

const menu = document.getElementById('nav-toggle');
const overlay = document.querySelector('.overlay');
const navigation = document.getElementById('main-menu');
const header = document.getElementsByTagName('header')[0];



menu.addEventListener('click', navToggle);

function navToggle(){
    overlay.classList.toggle('overlay-active');
    header.classList.toggle('mobile-menu-active');

    if(header.classList.contains('mobile-menu-active')){
        menu.innerHTML = '&#43;';
    } else{
        menu.innerHTML = '&#9776;';
    }
}