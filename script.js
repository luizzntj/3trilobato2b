function adicionarAoCarrinho(produto) {
    alert(produto + " foi adicionado ao carrinho!");
}

function changeBannerText() {
    const bannerText = document.getElementById('bannerText');
    bannerText.innerText = bannerText.innerText === "Orgulho de Ser Corinthiano!" ? "Vai, Corinthians!" : "Orgulho de Ser Corinthiano!";
}
