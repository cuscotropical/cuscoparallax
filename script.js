let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

let productsEnd = document.getElementById("produtos-fim"); // Substitua "produtos-fim" pelo ID real do elemento que marca o final da seção de produtos

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    // Verificar se o scroll está dentro da área dos produtos
    if (value >= productsEnd.offsetTop) {
        // Atingiu o final da seção de produtos, pare o movimento dos elementos
        return;
    }

    // Continue movendo os elementos enquanto estiver acima do final da seção de produtos
    moon.style.top = value * 9 + "px";
    text.style.top = 80 + value * -0.2 + "%";
    train.style.left = value * 1.5 + "px";
    desert_moon.style.top = value * 0.3 + "px";
    man.style.left = value * 0.6 + "px";
});

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    // Limitar a posição de rolagem ao final da seção de produtos
    if (pos >= productsEnd.offsetTop) {
        document.documentElement.scrollTop = productsEnd.offsetTop;
        pos = productsEnd.offsetTop; // Atualizar a posição de rolagem para o final da seção de produtos
        scrollProgress.style.display = "none"; // Esconder a barra de progresso ao atingir o final da seção de produtos
    } else {
        scrollProgress.style.display = "grid"; // Mostrar a barra de progresso enquanto estiver acima do final da seção de produtos
    }

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%,#67ccff ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

