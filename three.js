let arrowOne = document.querySelector(".me2");
arrowOne.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.classList.add('slide-right');
    setTimeout(function() {
        window.location.href = "pageTwo.html";
    }, 300);
});
let arrowThree = document.querySelector(".me1");
arrowThree.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.classList.add('slide-left');
    setTimeout(function() {
        window.location.href = "pageFour.html";
    }, 300);
});