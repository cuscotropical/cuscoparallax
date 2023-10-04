let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

let scrollProgress = document.getElementById("progress");

window.addEventListener("scroll", () => {
    let scrollArea = document.getElementById("scroll-area");
    let scrollY = window.scrollY;
    let areaTop = scrollArea.offsetTop;
    let areaBottom = areaTop + scrollArea.offsetHeight;

    if (scrollY >= areaTop && scrollY <= areaBottom) {
        let value = scrollY - areaTop;
        moon.style.top = value * 9 + "px";
        text.style.top = 80 + value * -0.2 + "%";
        train.style.left = value * 1.5 + "px";

        desert_moon.style.top = value * 0.3 + "px";
        man.style.left = value * 0.6 + "px";
    }

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%,#67ccff ${scrollValue}%)`;
});

window.onload = () => {
    let scrollArea = document.getElementById("scroll-area");
    scrollArea.style.height = document.body.scrollHeight - window.innerHeight + "px";
};

