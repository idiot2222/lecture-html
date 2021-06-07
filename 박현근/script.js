var images = document.querySelectorAll(".carousel-img");
var cards = document.querySelectorAll(".card");

for(let i = 0 ; i < images.length ; i++) {
    images[i].addEventListener("mouseover", function() {
        this.style.opacity = .5;
    });
    images[i].addEventListener("mouseout", function() {
        this.style.opacity = 1;
    });
}

for(let i = 0 ; i < cards.length ; i++) {
    let cardImg = cards[i].firstElementChild;
    let cardBody = cards[i].lastElementChild;

    cardBody.addEventListener("click", function() {
        if(cardImg.classList.contains("hide")) {
            cardImg.classList.remove("hide");
        }
        else {
            cardImg.classList.add("hide");
        }
    });
}