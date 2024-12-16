// import {products} from '../globals/script.js';

const products = [{
    id: 1,
    name: "Smartphone Xiaomi 14 Dual Sim",
    brand: "Marca Xiaomi",
    price: 1740,
    image: "images/xiaomi1.webp"
  },
  {
    id: 2,
    name: "O Xiaomi Redmi 14C",
    brand: "Marca xiaomi",
    price: 3200,
    image: "images/xiaomi2.webp"
  },
  {
    id: 3,
    name: "Xiaomi Redmi 8 Dual SIM",
    brand: "Marca Xiaomi",
    price: 2730,
    image: "images/xiaomi3.webp"
  },
//   {
//     id: 4,
//     name: "Smartphone Redmi 13C",
//     brand: "Marca Xiaomi",
//     price: 4600,
//     image: "images/xiaomi4.webp"
//   },
//   {
//     id: 5,
//     name: "Smartphone Xiaomi Redmi Note 50",
//     brand: "Marca Xiaomi",
//     price: 5450,
//     image: "images/xiaomi5.webp"
//   },
//   {
//     id: 6,
//     name: "Smartphone Xiaomi Redmi Note 13",
//     brand: "Marca Xiaomi",
//     price: 4820,
//     image: "images/xiaomi6.webp"
//   },
//   {
//     id: 7,
//     name: "Apple iPhone 15 (128 GB) Rosa",
//     brand: "Marca Apple",
//     price: 6830,
//     image: "images/apple1.webp"
//   },
//   {
//     id: 8,
//     name: "iPhone 12 Apple 64GB Preto",
//     brand: "Marca Apple",
//     price: 7150,
//     image: "images/apple2.webp"
//   },
//   {
//     id: 9,
//     name: "Smartphone Xiaomi Redmi Note 13 ",
//     brand: "Marca Xiaomi",
//     price: 3450,
//     image: "images/apple3.webp"
//   },
//   {
//     id: 10,
//     name: "Apple iPhone 12 (128 GB) Meia noite ",
//     brand: "Marca Apple",
//     price: 4150,
//     image: "images/apple4.webp"
//   },
//   {
//     id: 11,
//     name: "Apple iPhone 14 (128 GB) Meia noite ",
//     brand: "Marca Apple",
//     price: 8850,
//     image: "images/apple5.webp"
//   },
//   {
//     id: 12,
//     name: "Apple iPhone 13 (128 GB) RED",
//     brand: "Marca Apple",
//     price: 6250,
//     image: "images/apple6.webp"
//   },
//   {
//     id: 13,
//     name: "Smartphone Xiaomi POCO X6 Pro 5G 512GB",
//     brand: "Marca Xiaomi",
//     price: 5850,
//     image: "images/xiaomi7.webp"
//   },
//   {
//     id: 14,
//     name: "Apple iPhone 16 Pro Max (256 GB) Titânio preto",
//     brand: "Marca Apple",
//     price: 8850,
//     image: "images/apple7.webp"
//   },
//   {
//     id: 15,
//     name: "Apple iPhone 15 (128 GB) Verde",
//     brand: "Marca Apple",
//     price: 7950,
//     image: "images/apple8.webp"
//   },
]

displayProducts(products);
function displayProducts(filteredProducts) {
  const catalog = document.getElementById('products');
  catalog.innerHTML = '';

  filteredProducts.forEach(product => {
    const card = document.createElement('section');
    card.className = 'productDetail';
    card.innerHTML = `
                <div class="imageSubtitle">
                    <img src="/${product.image}">
                    <p>${product.name}</p>
                </div>
                <p>R$ ${product.price}</p>
                <div class="buttonCarrinho">
                        <button id ="btnSubtrair${product.id}">-</button>
                        <input id ="qtdProduto${product.id}" value="1" min="0" disabled>
                        <button id="btnSomar${product.id}">+</button>
                </div>
                <p>R$ <span id ="totalPreco${product.id}"></span></p>
        `;
    catalog.appendChild(card);

    document.getElementById(`btnSubtrair${product.id}`).addEventListener('click', () => handleClickSubtrair(product.id, filteredProducts));
document.getElementById(`btnSomar${product.id}`).addEventListener('click', () => handleClickSomar(product.id, filteredProducts));

    const inputQtdProduto = document.getElementById('qtdProduto'+product.id);
    const spanPrecoTotal = document.getElementById('totalPreco'+product.id);
    spanPrecoTotal.innerHTML = `${inputQtdProduto.value * product.price}`;
  });
}

const cartProducts = document.getElementsByClassName(products)
for(var i=0; i<cartProducts.length; i ++){
    console.log(cartProducts[i])
}


function atualizarPrecoTotal(id, filteredProducts) {
    const inputQtdProduto = document.getElementById('qtdProduto' + id);
    const spanPrecoTotal = document.getElementById('totalPreco' + id);

    const produto = filteredProducts.find(prod => prod.id === id); 
    if (produto) {
        const precoTotal = parseInt(inputQtdProduto.value || 0) * produto.price;
        spanPrecoTotal.innerHTML = `${precoTotal.toFixed(2)}`;
    }
}

function calcularPrecoTotalGeral(filteredProducts) {
    let totalGeral = 0;

    
    filteredProducts.forEach(product => {
        const inputQtdProduto = document.getElementById('qtdProduto' + product.id);
        const quantidade = parseInt(inputQtdProduto.value || 0);
        totalGeral += quantidade * product.price;
    });

   
    const totalPriceElement = document.getElementById('totalPrice');
    if (totalPriceElement) {
        totalPriceElement.textContent = totalGeral.toFixed(2); 
    }
}

function handleClickSomar(id, filteredProducts) {
    const inputQtdProduto = document.getElementById('qtdProduto' + id);
    inputQtdProduto.value = parseInt(inputQtdProduto.value || 0) + 1;
    atualizarPrecoTotal(id, filteredProducts);
    calcularPrecoTotalGeral(filteredProducts);
}

function handleClickSubtrair(id, filteredProducts) {
    const inputQtdProduto = document.getElementById('qtdProduto'+id);
    if ( parseInt(inputQtdProduto.value) < 1){
        inputQtdProduto.value = 0;
    } else {
        inputQtdProduto.value = parseInt(inputQtdProduto.value) - 1;

    }
    atualizarPrecoTotal(id, filteredProducts);
    calcularPrecoTotalGeral(filteredProducts);
}

function adicionarEventoInput(filteredProducts) {
    filteredProducts.forEach(product => {
        const inputQtdProduto = document.getElementById('qtdProduto' + product.id);
        inputQtdProduto.addEventListener('input', () => {
            atualizarPrecoTotal(product.id, filteredProducts);
            calcularPrecoTotalGeral(filteredProducts);
        });
    });
}

displayProducts(products);
calcularPrecoTotalGeral(products);
adicionarEventoInput(products);


// let btnSubtrairProduto = document.querySelector("#btnSubtrair");
// let btnSomarProduto = document.querySelector("#btnSomar");
// let quantidadeProduto = document.querySelector("#qtdProduto");
// let totalPrecoProduto = document.querySelector("#totalPreco");

// console.log(totalPrecoProduto);

// function adicionarUm(){
//     quantidadeProduto.value = Number(quantidadeProduto.value) +1;
// };

// function subtrairUm(){
//     quantidadeProduto.value = Number(quantidadeProduto.value)-1;

//     if (quantidadeProduto.value < 0){
//         quantidadeProduto.value = 0;
//     }
// }


// //evento add qtd carrinho
// btnSomarProduto.addEventListener("click", adicionarUm);
// //evento remove qtd carrinho
// btnSubtrairProduto.addEventListener("click", subtrairUm);
