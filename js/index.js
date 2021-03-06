const vl = document.querySelector('.vl');
const homeLabel = document.querySelector('.navHome');
const homeSection = document.querySelector('#home');

const sectionOptions = {
    threshold: .501
};
const homeObserver = new IntersectionObserver(function(entries,homeObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            homeLabel.classList.add("activeLabel");
            vl.style.height = "90%";
        }
        else {
            homeLabel.classList.remove("activeLabel");
        }
    });
}, sectionOptions);

homeObserver.observe(homeSection);


const aboutLabel = document.querySelector('.navAbout');
const aboutSection = document.querySelector('#about');

const aboutObserver = new IntersectionObserver(function(entries,aboutObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            aboutLabel.classList.add("activeLabel")
            vl.style.height = "25%";
        }
        else {
            aboutLabel.classList.remove("activeLabel");
        }
    });
}, sectionOptions);

aboutObserver.observe(aboutSection);


const workLabel = document.querySelector('.navWork');
const workSection = document.querySelector('#myWork');

const workObserver = new IntersectionObserver(function(entries,workObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            workLabel.classList.add("activeLabel");
            vl.style.height = "50%";
        }
        else {
            workLabel.classList.remove("activeLabel");
        }
    });
}, sectionOptions);

workObserver.observe(workSection);


const contactLabel = document.querySelector('.navContact');
const contactSection = document.querySelector('#contact');

const contactObserver = new IntersectionObserver(function(entries,contactObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            contactLabel.classList.add("activeLabel");
            vl.style.height = "75%";
        }
        else {
            contactLabel.classList.remove("activeLabel");
        }
    });
}, sectionOptions);

contactObserver.observe(contactSection);
