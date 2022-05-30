const hortifruit   = [];
console.log(hortifruit)
const laticinio    = [];
console.log(laticinio)
const panificadora = [];
console.log(panificadora)
const todosProdutos = [];
console.log(todosProdutos)
const somaTudo = (0);
console.log(somaTudo);

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
    button_02.innerText = ("Hortifruit");
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

}
criarMenu()


function somaTotal(){
    for(let i = 0; i < produtos.length;i++){
        produtos[i].precosomaTudo += produtos[i].preco;
         }

    const main       = document.querySelector("main");
    const somaTotal  = document.createElement("div");
    const valorTotal = document.createElement("div");
    const paragrafo  = document.createElement("p");

    
    somaTotal.classList.add     ("somaTotal");
    paragrafo.classList.add     ("textoValorTotal");
    valorTotal.classList.add    ("valorTotal");

    paragrafo.innerText = ("Valor total dos produtos da sessão selecionada");
    valorTotal.innerText= ("R$ 35,00")
    
    
    main.append           (somaTotal);
    somaTotal.append (paragrafo);
    somaTotal.append (valorTotal);
   
}
somaTotal()
tegProduto ( )

function criarCard(item){
    console.log(item.categoria)
    //criando todos as tegs do card.
    const prodCar       = document.querySelector(".produtos");
    const card          = document.createElement("section");
    const imgCard       = document.createElement("figure");
    const img           = document.createElement("img")
    const infor         = document.createElement("div");
    const titulo        = document.createElement("p");
    const tipo          = document.createElement("p")
    const valorProduto  = document.createElement("p")

    //atribuindo classes pras tags.
    card.classList.add             ("card");
    imgCard.classList.add          ("imgCard");
    infor.classList.add            ("infor");
    titulo.classList.add           ("titulo");
    tipo.classList.add             ("tipo");
    valorProduto.classList.add     ("titulo");

    //atribuindo conteudo para tags.
    img.src                = prodCar.img;
    img.alt                = prodCar.titulo;
    titulo.innerHTML       = `${prodCar.nome}`
    tipo.innerHTML         = `${prodCar.secao}`
    valorProduto.innerHTML = `R$ ${prodCar.preco}.00`

    //organização do card.
    card.append     (imgCard);
    imgCard.append  (img);
    infor.append    (titulo);
    infor.append    (tipo);
    infor.append    (valorProduto);
    card.append     (infor);
    prodCar.append  (card);
}
criarCard(produtos)

function tegProduto ( ){
    const main    = document.querySelector("main"); 
    const prodTeg = document.createElement("div")
    prodTeg.classList.add ("produtos")

    main.append (prodTeg);
}
criarCard( )
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
function montarDados() {
    console.log(produtos)
    for(let i = 0; i < produtos.length;i++){
        const produto = produtos[i];
        criarCard(produto)
        if(produtos[i].tipo == 'Panificadora'){
            panificadora.push(produto);
        }if(produtos[i].tipo == 'Hortifruti'){
            hortifruit.push(produto);
        }if(produtos[i].tipo == 'Laticínio'){
            laticinio.push(produto);
        }else{
            todosProdutos.push(produto);
        }
    }
} 
montarDados();