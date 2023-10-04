let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

let productsEnd = document.getElementById("produtos-fim");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    // Aplicar efeito parallax às imagens
    moon.style.top = value * 0.9 + "px"; 
    text.style.top = 80 + value * -0.2 + "%";
    train.style.left = value * 0.75 + "px"; 
    desert_moon.style.top = value * 0.3 + "px";
    man.style.left = value * 0.6 + "px";

    
    if (value >= productsEnd.offsetTop) {
        document.documentElement.scrollTop = productsEnd.offsetTop;
    }
});

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    // Esconder a barra de progresso ao atingir o final da seção de produtos
    if (pos >= productsEnd.offsetTop) {
        scrollProgress.style.display = "none";
    } else {
        // Calcular e exibir a barra de progresso enquanto estiver acima do final da seção de produtos
        scrollProgress.style.display = "grid";
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%,#67ccff ${scrollValue}%)`;
    }
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
