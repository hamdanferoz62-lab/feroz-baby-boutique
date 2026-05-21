/* ============================================
   Feroz Sons Kids Collection - Main JS
   Handles: products data, rendering, filters,
   cart (localStorage), drawer, forms, nav.
============================================ */

/* ---------- 50 Products ---------- */
const PRODUCTS = [
  // Baby Feeders
  {id:1,  name:"Soft Silicone Feeder",     cat:"Feeders",  price:899,  img:"https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=500&q=70"},
  {id:2,  name:"Anti-Colic Bottle Feeder", cat:"Feeders",  price:1199, img:"https://images.unsplash.com/photo-1544991875-5dc1b05f607d?w=500&q=70"},
  {id:3,  name:"Pacifier Style Feeder",    cat:"Feeders",  price:649,  img:"https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?w=500&q=70"},
  {id:4,  name:"Fruit Mesh Feeder",        cat:"Feeders",  price:549,  img:"https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=70"},
  {id:5,  name:"Spoon Bottle Feeder",      cat:"Feeders",  price:799,  img:"https://images.unsplash.com/photo-1606483956061-46a898dce538?w=500&q=70"},

  // Bottles
  {id:6,  name:"Wide Neck Glass Bottle",   cat:"Bottles",  price:1399, img:"https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&q=70"},
  {id:7,  name:"Travel Sipper Bottle",     cat:"Bottles",  price:899,  img:"https://images.unsplash.com/photo-1623934199716-dc28818a6ef9?w=500&q=70"},
  {id:8,  name:"Insulated Milk Bottle",    cat:"Bottles",  price:1599, img:"https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=500&q=70"},
  {id:9,  name:"BPA-Free Slim Bottle",     cat:"Bottles",  price:999,  img:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=70"},
  {id:10, name:"Twin Pack Feeding Bottles",cat:"Bottles",  price:1799, img:"https://images.unsplash.com/photo-1576073719676-aa95576db207?w=500&q=70"},

  // Newborn Suits
  {id:11, name:"Cotton Romper Suit",       cat:"Suits",    price:1499, img:"https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&q=70"},
  {id:12, name:"Full Sleeve Sleep Suit",   cat:"Suits",    price:1699, img:"https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=70"},
  {id:13, name:"Hooded Bear Onesie",       cat:"Suits",    price:1899, img:"https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&q=70"},
  {id:14, name:"Newborn Wrap Gown",        cat:"Suits",    price:1299, img:"https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=500&q=70"},
  {id:15, name:"Two-Piece Pajama Set",     cat:"Suits",    price:1599, img:"https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&q=70"},

  // Shoes
  {id:16, name:"Soft Sole Booties",        cat:"Shoes",    price:799,  img:"https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500&q=70"},
  {id:17, name:"Knitted Crib Shoes",       cat:"Shoes",    price:699,  img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=70"},
  {id:18, name:"Velcro Walker Shoes",      cat:"Shoes",    price:999,  img:"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=70"},
  {id:19, name:"Pre-Walker Sandals",       cat:"Shoes",    price:899,  img:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=70"},
  {id:20, name:"Winter Fur Booties",       cat:"Shoes",    price:1199, img:"https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=500&q=70"},

  // Blankets
  {id:21, name:"Muslin Swaddle Blanket",   cat:"Blankets", price:1299, img:"https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&q=70"},
  {id:22, name:"Fleece Receiving Blanket", cat:"Blankets", price:1499, img:"https://images.unsplash.com/photo-1606027532407-8d4146a3a25b?w=500&q=70"},
  {id:23, name:"Hooded Bath Blanket",      cat:"Blankets", price:1399, img:"https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=500&q=70"},
  {id:24, name:"Knitted Wrap Blanket",     cat:"Blankets", price:1799, img:"https://images.unsplash.com/photo-1543702718-87c69aa75db3?w=500&q=70"},
  {id:25, name:"Quilted Crib Blanket",     cat:"Blankets", price:1999, img:"https://images.unsplash.com/photo-1610736703141-c12ae8a3f23b?w=500&q=70"},

  // Toys
  {id:26, name:"Soft Plush Teddy Bear",    cat:"Toys",     price:999,  img:"https://images.unsplash.com/photo-1556012018-50c5c0da73bf?w=500&q=70"},
  {id:27, name:"Musical Rattle Set",       cat:"Toys",     price:799,  img:"https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&q=70"},
  {id:28, name:"Hanging Cot Mobile",       cat:"Toys",     price:1499, img:"https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=500&q=70"},
  {id:29, name:"Soft Activity Cube",       cat:"Toys",     price:1199, img:"https://images.unsplash.com/photo-1591375275624-c4c20e88c14d?w=500&q=70"},
  {id:30, name:"Teething Ring Set",        cat:"Toys",     price:599,  img:"https://images.unsplash.com/photo-1525286335722-c1e76bca1ef7?w=500&q=70"},

  // Clothing Sets
  {id:31, name:"3-Piece Gift Set",         cat:"Clothing", price:2299, img:"https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=500&q=70"},
  {id:32, name:"Girl Floral Set",          cat:"Clothing", price:1999, img:"https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=500&q=70"},
  {id:33, name:"Boy Dungaree Set",         cat:"Clothing", price:2099, img:"https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&q=70"},
  {id:34, name:"Knitted Sweater Set",      cat:"Clothing", price:2499, img:"https://images.unsplash.com/photo-1503944168849-8bf86e7e7da9?w=500&q=70"},
  {id:35, name:"Summer Cotton Set",        cat:"Clothing", price:1799, img:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500&q=70"},

  // Caps
  {id:36, name:"Knitted Bear Cap",         cat:"Caps",     price:399,  img:"https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=70"},
  {id:37, name:"Cotton Newborn Cap",       cat:"Caps",     price:299,  img:"https://images.unsplash.com/photo-1564429097439-e2b1de7e2cdd?w=500&q=70"},
  {id:38, name:"Pom-Pom Winter Cap",       cat:"Caps",     price:499,  img:"https://images.unsplash.com/photo-1571513722275-4b8c2b03b67e?w=500&q=70"},
  {id:39, name:"Sun Bucket Hat",           cat:"Caps",     price:599,  img:"https://images.unsplash.com/photo-1503944168849-8bf86e7e7da9?w=500&q=70"},
  {id:40, name:"Earflap Bunny Cap",        cat:"Caps",     price:549,  img:"https://images.unsplash.com/photo-1525286335722-c1e76bca1ef7?w=500&q=70"},

  // Accessories
  {id:41, name:"Bib & Burp Cloth Pack",    cat:"Accessories",price:699,img:"https://images.unsplash.com/photo-1606027532407-8d4146a3a25b?w=500&q=70"},
  {id:42, name:"Baby Mittens & Socks",     cat:"Accessories",price:499,img:"https://images.unsplash.com/photo-1543702718-87c69aa75db3?w=500&q=70"},
  {id:43, name:"Diaper Caddy Organizer",   cat:"Accessories",price:1499,img:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=70"},
  {id:44, name:"Pacifier Clip Holder",     cat:"Accessories",price:349,img:"https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?w=500&q=70"},
  {id:45, name:"Baby Grooming Kit",        cat:"Accessories",price:1299,img:"https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=500&q=70"},

  // Essentials
  {id:46, name:"Newborn Care Gift Box",    cat:"Essentials",price:2999,img:"https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=70"},
  {id:47, name:"Baby Bath Tub",            cat:"Essentials",price:2499,img:"https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=500&q=70"},
  {id:48, name:"Diaper Changing Mat",      cat:"Essentials",price:1399,img:"https://images.unsplash.com/photo-1610736703141-c12ae8a3f23b?w=500&q=70"},
  {id:49, name:"Baby Wipes Pack",          cat:"Essentials",price:599, img:"https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=500&q=70"},
  {id:50, name:"Bottle Sterilizer",        cat:"Essentials",price:3499,img:"https://images.unsplash.com/photo-1576073719676-aa95576db207?w=500&q=70"},
];

const CATEGORIES = ["All","Feeders","Bottles","Suits","Shoes","Blankets","Toys","Clothing","Caps","Accessories","Essentials"];

/* ---------- Cart (localStorage) ---------- */
const CART_KEY = "fsk_cart";
const getCart = ()=>JSON.parse(localStorage.getItem(CART_KEY)||"[]");
const saveCart = (c)=>localStorage.setItem(CART_KEY,JSON.stringify(c));

function addToCart(id){
  const cart = getCart();
  const item = cart.find(i=>i.id===id);
  if(item) item.qty++;
  else{
    const p = PRODUCTS.find(p=>p.id===id);
    cart.push({...p, qty:1});
  }
  saveCart(cart);
  updateCartUI();
  showToast("Added to cart ✓");
}
function removeFromCart(id){
  saveCart(getCart().filter(i=>i.id!==id));
  updateCartUI();
}
function changeQty(id,delta){
  const cart = getCart();
  const item = cart.find(i=>i.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) return removeFromCart(id);
  saveCart(cart); updateCartUI();
}

function updateCartUI(){
  const cart = getCart();
  const count = cart.reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll(".cart-count").forEach(el=>el.textContent=count);

  const list = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  if(!list) return;
  if(cart.length===0){
    list.innerHTML = `<div class="cart-empty">Your cart is empty 🛒</div>`;
    if(totalEl) totalEl.textContent = "Rs 0";
    return;
  }
  list.innerHTML = cart.map(i=>`
    <div class="cart-item">
      <img src="${i.img}" alt="${i.name}">
      <div class="info">
        <div class="name">${i.name}</div>
        <div class="price">Rs ${i.price}</div>
        <div class="qty-ctrl">
          <button onclick="changeQty(${i.id},-1)">−</button>
          <span>${i.qty}</span>
          <button onclick="changeQty(${i.id},1)">+</button>
          <button class="remove-item" onclick="removeFromCart(${i.id})">Remove</button>
        </div>
      </div>
    </div>`).join("");
  const total = cart.reduce((s,i)=>s+i.qty*i.price,0);
  if(totalEl) totalEl.textContent = "Rs "+total.toLocaleString();
}

/* ---------- Product Rendering ---------- */
function renderProducts(target, items){
  const el = document.getElementById(target);
  if(!el) return;
  el.innerHTML = items.map(p=>`
    <article class="product-card fade-up">
      <div class="product-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="product-body">
        <span class="product-cat">${p.cat}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-price">Rs ${p.price.toLocaleString()}</div>
        <button class="add-cart" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    </article>`).join("");
}

/* ---------- Filters ---------- */
function initFilters(){
  const bar = document.getElementById("filterBar");
  if(!bar) return;
  bar.innerHTML = CATEGORIES.map((c,i)=>
    `<button class="filter-btn ${i===0?'active':''}" data-cat="${c}">${c}</button>`).join("");
  bar.querySelectorAll(".filter-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      bar.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.cat;
      const list = cat==="All"?PRODUCTS:PRODUCTS.filter(p=>p.cat===cat);
      renderProducts("productGrid", list);
    });
  });
}

/* ---------- Toast ---------- */
let toastTimer;
function showToast(msg){
  let t = document.getElementById("toast");
  if(!t){
    t = document.createElement("div");
    t.id="toast"; t.className="toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove("show"),1800);
}

/* ---------- Cart drawer ---------- */
function initCartDrawer(){
  const openBtn = document.getElementById("openCart");
  const drawer  = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  const closeBtn= document.getElementById("closeCart");
  if(!openBtn||!drawer) return;
  const open = ()=>{drawer.classList.add("open");overlay.classList.add("open")};
  const close= ()=>{drawer.classList.remove("open");overlay.classList.remove("open")};
  openBtn.addEventListener("click",open);
  closeBtn.addEventListener("click",close);
  overlay.addEventListener("click",close);
  const checkout = document.getElementById("checkoutBtn");
  if(checkout) checkout.addEventListener("click",()=>{
    if(getCart().length===0) return showToast("Cart is empty");
    showToast("Order placed! We'll contact you soon 💛");
    saveCart([]); updateCartUI(); close();
  });
}

/* ---------- Nav toggle ---------- */
function initNav(){
  const burger = document.querySelector(".hamburger");
  const links = document.querySelector(".nav-links");
  if(burger&&links) burger.addEventListener("click",()=>links.classList.toggle("open"));
}

/* ---------- Forms ---------- */
function initForms(){
  const contact = document.getElementById("contactForm");
  if(contact) contact.addEventListener("submit",e=>{
    e.preventDefault();
    showToast("Message sent! We'll reply soon ✓");
    contact.reset();
  });
  const login = document.getElementById("loginForm");
  if(login) login.addEventListener("submit",e=>{
    e.preventDefault();
    showToast("Welcome back to Feroz Sons 💛");
    login.reset();
  });
  const signup = document.getElementById("signupForm");
  if(signup) signup.addEventListener("submit",e=>{
    e.preventDefault();
    showToast("Account created! Please log in.");
    signup.reset();
    document.querySelector('[data-tab="login"]')?.click();
  });
  // tabs
  document.querySelectorAll(".tab").forEach(t=>{
    t.addEventListener("click",()=>{
      document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
      t.classList.add("active");
      const tab = t.dataset.tab;
      document.getElementById("loginForm").style.display  = tab==="login"?"block":"none";
      document.getElementById("signupForm").style.display = tab==="signup"?"block":"none";
      document.querySelector(".auth-card h2").textContent = tab==="login"?"Welcome Back":"Create Account";
    });
  });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded",()=>{
  // home shows 8 featured
  renderProducts("featuredGrid", PRODUCTS.slice(0,8));
  // products page: full list + filters
  renderProducts("productGrid", PRODUCTS);
  initFilters();
  initCartDrawer();
  initNav();
  initForms();
  updateCartUI();
});
