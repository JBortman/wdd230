/*-----Script for loading images in Discover-----*/
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};


const imgObserver = new IntersectionObserver ((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        } else {
            loadImages(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
});

/*-----Number of days between visits-----*/
let prevVisit = Number(window.localStorage.getItem("previous-visit"))
let currentVisit = Date.now();
let text = document.querySelector('#time-visited')

if(prevVisit < 1){
    text.textContent = "Welcome! It appears this is your first visit!"
} else {
    let totalTime = Math.round((currentVisit - prevVisit) / 86400000)
    text.textContent = "It has been "+ totalTime +" days since your last visit"
}
Number(window.localStorage.setItem("previous-visit", currentVisit))