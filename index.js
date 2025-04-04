let arrow = document.querySelector(".nextArrow");
arrow.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.classList.add('slide-left');
    setTimeout(function() {
        window.location.href = "pageTwo.html";
    }, 10);
});