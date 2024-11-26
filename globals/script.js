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
  {
    id: 4,
    name: "Smartphone Redmi 13C",
    brand: "Marca Xiaomi",
    price: 4600,
    image: "images/xiaomi4.webp"
  },
  {
    id: 5,
    name: "Smartphone Xiaomi Redmi Note 50",
    brand: "Marca Xiaomi",
    price: 5450,
    image: "images/xiaomi5.webp"
  },
  {
    id: 5,
    name: "Smartphone Xiaomi Redmi Note 13",
    brand: "Marca Xiaomi",
    price: 4820,
    image: "images/xiaomi6.webp"
  },
  {
    id: 5,
    name: "Apple iPhone 15 (128 GB) Rosa",
    brand: "Marca Apple",
    price: 6830,
    image: "images/apple1.webp"
  },
  {
    id: 5,
    name: "iPhone 12 Apple 64GB Preto",
    brand: "Marca Apple",
    price: 7150,
    image: "images/apple2.webp"
  },
  {
    id: 5,
    name: "Smartphone Xiaomi Redmi Note 13 ",
    brand: "Marca Xiaomi",
    price: 3450,
    image: "images/apple3.webp"
  },
  {
    id: 5,
    name: "Smartphone Xiaomi Redmi 12 256GB",
    brand: "Marca Xiaomi",
    price: 4150,
    image: "images/apple4.webp"
  },
  {
    id: 5,
    name: "Apple iPhone 14 (128 GB) Meia noite ",
    brand: "Marca Apple",
    price: 8850,
    image: "images/apple5.webp"
  },
  {
    id: 5,
    name: "Apple iPhone 13 (128 GB) RED",
    brand: "Marca Apple",
    price: 6250,
    image: "images/apple6.webp"
  },
  {
    id: 5,
    name: "Smartphone Xiaomi POCO X6 Pro 5G 512GB",
    brand: "Marca Xiaomi",
    price: 5850,
    image: "images/xiaomi7.webp"
  },
  {
    id: 5,
    name: "Apple iPhone 16 Pro Max (256 GB) Titânio preto",
    brand: "Marca Apple",
    price: 8850,
    image: "images/apple7.webp"
  },
  {
    id: 5,
    name: "Apple iPhone 15 (128 GB) Verde",
    brand: "Marca Apple",
    price: 7950,
    image: "images/apple8.webp"
  },
]

function displayProducts(filteredProducts) {
  const catalog = document.getElementById('catalog');
  catalog.innerHTML = '';

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Marca: ${product.brand}</p>
            <p>Preço: R$${product.price}</p>
        `;
    catalog.appendChild(card);
  });
}

function filterProducts() {
  const brandFilter = document.getElementById('brandFilter').value;
  const priceFilter = document.getElementById('priceFilter').value;

  const filteredProducts = products.filter(product => {
    const matchesBrand = brandFilter ? product.brand === brandFilter : true;
    const matchesPrice = priceFilter ? (
      (priceFilter === '0-2000' && product.price <= 2000) ||
      (priceFilter === '2000-5000' && product.price > 2000 && product.price <= 5000) ||
      (priceFilter === '5000-7000' && product.price > 5000 && product.price <= 7000) ||
      (priceFilter === '7000-9000' && product.price > 7000 && product.price <= 9000)
    ) : true;

    return matchesBrand && matchesPrice;
  });

  displayProducts(filteredProducts);
}

document.getElementById('brandFilter').addEventListener('change', filterProducts);
document.getElementById('priceFilter').addEventListener('change', filterProducts);

displayProducts(products);