function criarMain ( ){
    const body      = document.querySelector("body");
    const cabecalho = document.createElement("header");
    const figure    = document.createElement("figure");

    cabecalho.classList.add     ("cabeca");
    figure.classList.add        ("logo");

    body.append             (cabecalho);
    cabecalho.appendChild   (figure);
}
criarMain()


function criarMenu( ) {

    const main      = document.querySelector("main");
    const nav       = document.createElement("nav");
    const button_01 = document.createElement("button");
    const button_02 = document.createElement("button");
    const button_03 = document.createElement("button");
    const button_04 = document.createElement("button");
    const pesquisa  = document.createElement("button");
    const buscar    = document.createElement("div");
    const input     = document.createElement("input");

    input.classList.add     ("text");
    buscar.classList.add    ("buscar");
    button_01.classList.add ("menu");
    button_02.classList.add ("menu");
    button_03.classList.add ("menu");
    button_04.classList.add ("menu");
    main.classList.add      ("principal");
    pesquisa.classList.add  ("pesquisa")
    
    button_01.innerText = ("Todos Produtos");
    button_02.innerText = ("Hortifruti");
    button_03.innerText = ("Panificadora");
    button_04.innerText = ("Laticínios");

    input.type        = ("search")
    input.placeholder = ("Pesquisar por")

    main.append         (nav);
    nav.appendChild     (button_01);
    nav.appendChild     (button_02);
    nav.appendChild     (button_03);
    nav.appendChild     (button_04);
    nav.appendChild     (buscar);
    buscar.appendChild  (input);
    buscar.appendChild  (pesquisa);

    //MENU E FILTROS
    // Todos Produtos
    button_01.addEventListener('click', function() {montarDados(produtos) })
    // Hortifruti
    function filtraHort (){
                const filtrados = produtos.filter((produto) => {return produto.secao == 'Hortifruti'});
                return filtrados
    }
    button_02.addEventListener('click', function() {
        const produtoHort = filtraHort()
        
        montarDados(produtoHort)
    });
    // Panificadora
    button_03.addEventListener('click', function() {const prodPanif = produtos.filter(function filterPanif(produto){
        return produto.secao == "Panificadora";})
        montarDados(prodPanif); })
    // Laticinios
    button_04.addEventListener('click', function() {const prodLatic = produtos.filter(function filterLatic (produto){
        return produto.secao == "Laticínio";
    })
    montarDados(prodLatic);})

}
criarMenu()

function somaTotal(){
    for(let i = 0; i < produtos.length;i++){
        produtos[i].precosomaTudo += produtos[i].preco;
        const itenstotal = document.querySelector("valorTotal")
         }
    
    const main       = document.querySelector("main");
    const somaTotal  = document.createElement("div");
    const valorTotal = document.createElement("div");
    const paragrafo  = document.createElement("p");

    
    somaTotal.classList.add     ("somaTotal");
    paragrafo.classList.add     ("textoValorTotal");
    valorTotal.classList.add    ("valorTotal");

    paragrafo.innerText = ("Valor total dos produtos da sessão selecionada");
    valorTotal.innerText= ("R$ 35,00");
    
    
    main.append      (somaTotal);
    somaTotal.append (paragrafo);
    somaTotal.append (valorTotal);
   
}
somaTotal()


function criarCard(item){
    //criando todos as tegs do card.
    const prodCar       = document.querySelector(".produtos");
    const card          = document.createElement("section");
    const imgCard       = document.createElement("figure");
    const img           = document.createElement("img")
    const infor         = document.createElement("div");
    const titulo        = document.createElement("p");
    const tipo          = document.createElement("p")
    const valorProduto  = document.createElement("p")
    //prodCar.innerHTML = '';

    //atribuindo classes pras tags.
    card.classList.add             ("card");
    imgCard.classList.add          ("imgCard");
    infor.classList.add            ("infor");
    titulo.classList.add           ("titulo");
    tipo.classList.add             ("tipo");
    valorProduto.classList.add     ("titulo");

    //atribuindo conteudo para tags.
    img.src                = item.img;
    img.alt                = item.titulo;
    titulo.innerHTML       = item.nome;
    tipo.innerHTML         = item.secao;
    valorProduto.innerHTML = `R$ ${item.preco},00`;

    //organização do card.
    card.append     (imgCard);
    imgCard.append  (img);
    infor.append    (titulo);
    infor.append    (tipo);
    infor.append    (valorProduto);
    card.append     (infor);
    prodCar.append  (card);
}

function tegProduto ( ){
    const main    = document.querySelector("main"); 
    const prodTeg = document.createElement("div")
    prodTeg.classList.add ("produtos")

    main.append (prodTeg);
}
tegProduto ( )

function rodaPe(){
    const body      = document.querySelector("body");
    const footer    = document.createElement("footer"); 
    const imgRodaPe = document.createElement("figure");
    const p         = document.createElement("p");

    footer.classList.add    ("rodape");
    imgRodaPe.classList.add ("imgRodaPe");

    p.innerHTML      = (`<strong>Contato:</strong> 3321 - 8181 ou 4002 - 8922 é o som do japoneis que vai da playstation 2`)

    body.append         (footer);
    footer.appendChild  (imgRodaPe);
    footer.appendChild  (p);
}
rodaPe()
function montarDados(produtos) {
    let sum = 0;
    // const main    = document.querySelector("main");
    // main.innerHTML=''; //limpar o HTML
    for(let i = 0; i < produtos.length;i++){
        sum += produtos[i].preco;
        const produto = produtos[i];
        
        criarCard(produto)
        
    }
    let valorFormatado = "R$ "+sum+",00";
    console.log(valorFormatado);
}
montarDados(produtos);
