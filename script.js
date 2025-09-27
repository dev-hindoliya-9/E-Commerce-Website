const products = [
  {id:1, title:"Phone", price:29999, category:"electronics", desc:"Smartphone with 6GB RAM", img:"mobile.png"},
  {id:2, title:"T-Shirt", price:1000, category:"clothing", desc:"Cotton T-Shirt", img:"https://github.com/dev-hindoliya-9/E-Commerce-Website/blob/main/tshirt.png"},
  {id:3, title:"Laptop", price:79999, category:"electronics", desc:"Laptop with i5 processor", img:"laptop.png"},
  {id:4, title:"Jeans", price:1499, category:"clothing", desc:"Denim Jeans", img:"jeans.webp"},
  // add more products
];

let cart = [];
const productGrid = document.getElementById('productGrid');
const cartCount = document.getElementById('cartCount');
const darkToggle = document.getElementById('darkModeToggle');

// Render products
function renderProducts(list){
  productGrid.innerHTML = '';
  list.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
      <button onclick="openModal(${p.id})">Quick View</button>
    `;
    productGrid.appendChild(card);
  });
}

// Add to cart
function addToCart(id){
  const product = products.find(p=>p.id===id);
  cart.push(product);
  cartCount.textContent = cart.length;
  alert(`${product.title} added to cart!`);
}

// Filter by category
function filterCategory(cat){
  if(cat==='all') renderProducts(products);
  else renderProducts(products.filter(p=>p.category===cat));
}

// Dark Mode Toggle
darkToggle.addEventListener('click',()=>document.body.classList.toggle('dark'));

// Modal
const modal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalAdd = document.getElementById('modalAddCart');

function openModal(id){
  const product = products.find(p=>p.id===id);
  modal.style.display='flex';
  modalImg.src = product.img;
  modalTitle.textContent = product.title;
  modalDesc.textContent = product.desc;
  modalPrice.textContent = `₹${product.price}`;
  modalAdd.onclick = ()=>{ addToCart(id); modal.style.display='none'; };
}

closeModalBtn.onclick = ()=>{ modal.style.display='none'; };
window.onclick = (e)=>{ if(e.target==modal) modal.style.display='none'; };

// Initial render
renderProducts(products);