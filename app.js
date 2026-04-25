/* =============================================
   SISIJALANKOPI — app.js
   ============================================= */
 
const WA_NUMBER = '6285724558521'; // ← Ganti nomor WA asli
 
// ── MENU DATA ─────────────────────────────────────────────────────────────────
const menuData = [
  {
    id: 'signature',
    label: '⭐ Signature Series',
    desc: 'Kreasi kami berbahan kopi yang tidak akan kalian temui selain di sini.',
    items: [
      { id: 'sig1', name: 'Cappucibro',               price: 28000, desc: 'Ice Cappucino kebanggaan kami, lebih creamy dan tinggi.', bs: true },
      { id: 'sig2', name: 'Es Kopi Dudu',              price: 25000, desc: 'Best Seller! Kopi susu ramah rasa dengan balutan Gula Kawung Aren.', bs: true },
      { id: 'sig3', name: 'Es Kopi Headquarter',       price: 25000, desc: 'Kopi susu dengan Sirup Gula Putih sebagai penyempurna rasa.', bs: false },
      { id: 'sig4', name: 'Dudu Shaked / Es Kopi Masiabro', price: 30000, desc: 'Sensasi minum Ice Cream, biji kopi dengan tase note coklat.', bs: true },
      { id: 'sig5', name: 'Pablo Peachcano',           price: 25000, desc: 'Kopi hitam dengan balutan buah peach segar dan buliran yang menggemaskan.', bs: true },
      { id: 'sig6', name: 'Romano',                    price: 25000, desc: 'Espresso & air dengan perpaduan buah Lemon/Sitrus yang menyegarkan.', bs: false },
      { id: 'sig7', name: 'Americardo',                price: 25000, desc: 'Americano / Ice Black++ dengan berbagai varian syrup pilihan.', bs: false },
      { id: 'sig8', name: 'Barista Choice',            price: 30000, desc: 'Espresso dopio dengan 90% cream kental rahasia dapur HQ.', bs: false },
      { id: 'sig9', name: 'Kopasus',                   price: 27000, desc: 'Kopi Pandan Susu, perpaduan Espresso Arabika dengan pandan & fresh milk.', bs: true },
    ]
  },
  {
    id: 'intcoffee',
    label: '☕ International Coffee',
    desc: 'Minuman yang telah melewati berbagai generasi waktu, penuh sejarah.',
    items: [
      { id: 'int1', name: 'LongBlack / Amer',    price: 27000, desc: 'Primadona satu tahun terakhir, Espresso & Air Mineral = zero kalori.', bs: true },
      { id: 'int2', name: 'Cappucino',            price: 30000, desc: 'Foam tegas dan bold, diikuti kopi dengan rasa milky yang kuat.', bs: true },
      { id: 'int3', name: 'Latte / Magic Latte',  price: 30000, desc: 'Kopi cenderung milky, foam halus dan tidak tebal, langsung terasa milky.', bs: false },
      { id: 'int4', name: 'Piccolo',              price: 26000, desc: 'Café latte dalam cangkir espresso, rasa espresso kuat namun halus.', bs: false },
      { id: 'int5', name: 'Dirty Latte',          price: 30000, desc: 'Espresso panas dituang di atas susu dingin, rasa kuat creamy dan smooth.', bs: true },
      { id: 'int6', name: 'Espresso On The Rock', price: 22000, desc: 'Cara laki-laki tangguh menikmati espresso, ditumpahkan di atas gunung es.', bs: true },
      { id: 'int7', name: 'Moccacino',            price: 30000, desc: 'Perpaduan citarasa klasik antara Kopi Fresh Milk dan Coklat.', bs: false },
    ]
  },
  {
    id: 'choco',
    label: '🍫 Chocholate Series',
    desc: 'Untuk pecinta coklat, berbagai kreasi dengan bahan coklat pilihan.',
    items: [
      { id: 'cho1', name: 'Cococis Masiabro', price: 30000, desc: 'Wip Krim rahasia dapur kami, Ice Coklat dibalut Masiabro. Harus coba!', bs: true },
      { id: 'cho2', name: 'Coklat Cuy',       price: 27000, desc: 'Basic dark coklat, terinspirasi Ice Coklat Dunkin Doughnut.', bs: false },
      { id: 'cho3', name: 'JhonSnow',         price: 32000, desc: 'Dark coklat dengan sensasi mint dan creamy, sensasional!', bs: true },
      { id: 'cho4', name: 'Rock Berry',       price: 29000, desc: 'Milkshake Coklat dan Strawberry, sweet coklat & kesegaran strawberry.', bs: true },
    ]
  },
  {
    id: 'tea',
    label: '🍵 Tea Series',
    desc: 'Pilihan teh segar untuk pecinta non-kopi yang ingin tetap menikmati.',
    items: [
      { id: 'tea1', name: 'Leci Tea',        price: 28000, desc: 'Minuman Favorite Sejuta Umat.', bs: true },
      { id: 'tea2', name: 'Lemon Tea/Squash',price: 20000, desc: 'Minuman Lemon, Menyegarkan Hari-Hari Anda.', bs: false },
      { id: 'tea3', name: 'Leci Yakult',     price: 25000, desc: 'Probiotik Yakult dan sirup buah Leci dengan sensasi kesegaran asam Youghurt.', bs: false },
      { id: 'tea4', name: 'Thai Tea',        price: 25000, desc: 'Casual Thai Tea & Sweet Milk. Disarankan pakai Masiabro.', bs: false },
    ]
  },
  {
    id: 'shaked',
    label: '🥤 Shaked Series',
    desc: 'Kreasi shake segar dan creamy untuk moodbooster hari-harimu.',
    items: [
      { id: 'shk1', name: 'Strawberry Fields', price: 27000, desc: 'Classic milkshake strawberry ketika kamu bosan dengan kopi/coklat.', bs: true },
      { id: 'shk2', name: 'Strawberry Blast',  price: 23000, desc: 'Sirup strawberry dengan campuran buah Lemon, sensasi segar.', bs: false },
      { id: 'shk3', name: 'Asteroid',          price: 23000, desc: 'Milkshake cream sweet milk dengan taburan Oreo, terinspirasi dari mang nana smanda.', bs: false },
      { id: 'shk4', name: 'Matcha Latte',      price: 25000, desc: 'Casual matcha & sweet milk, disarankan tambahkan masiabro.', bs: true },
      { id: 'shk5', name: 'Klepon',            price: 25000, desc: 'Rasa kue tradisional jajanan pasar, pandan wangi, manis gula merah, serutan kelapa.', bs: true },
    ]
  },
  {
    id: 'botol',
    label: '🍶 Botol Series',
    desc: 'Buah Tangan dari Kuningan! Kemasan botol 500ml siap dibawa pulang.',
    items: [
      { id: 'bot1', name: 'GIMALASUAR', price: 40000, desc: 'Minuman 500ml penyelamat bisnis di masa COVID. Kopi Susu Full Arabika dari Kuningan.', bs: true },
      { id: 'bot2', name: 'PALUGADA',   price: 60000, desc: 'Semua minuman favorite dalam kemasan botol 500ml yang bisa kamu bawa pulang!', bs: false },
    ]
  },
  {
    id: 'cemilan',
    label: '🍽️ Cemilan',
    desc: 'Teman ngopi yang pas, cemilan pilihan untuk menemani sesimu.',
    items: [
      { id: 'cem1',  name: 'Sj Platter',              price: 28000, desc: 'Menu Sharing: sosis goreng dan kentang goreng, rame-rame teman ngopi.', bs: false },
      { id: 'cem2',  name: 'Kentang Goreng',           price: 23000, desc: 'Cemilan wajib yang harus ada di Toko Kopi.', bs: false },
      { id: 'cem3',  name: 'Dimsum',                   price: 24000, desc: 'Siomai dari bungkusan tepung tipis berisi daging dan dikukus.', bs: false },
      { id: 'cem4',  name: 'Moza Choco Chruncy',       price: 24000, desc: 'Roti Goreng di lumuri tepung panir, berisi keju Mozarella, disiram coklat.', bs: true },
      { id: 'cem5',  name: 'Cireng Cuy',               price: 22000, desc: 'Aci Goreng dengan bumbu Rujak manis pedas. Best Seller makanan asin!', bs: true },
      { id: 'cem6',  name: 'Pisang Bakar',             price: 24000, desc: 'Pisang dibakar dengan coklat keju dan kental manis, modifikasi warga +62.', bs: false },
      { id: 'cem7',  name: 'Indomie Karbonara',        price: 23000, desc: 'Bakmi asli Indonesia kebanggaan kita, dimodifikasi jadi lebih creamy dan yummy.', bs: true },
      { id: 'cem8',  name: 'Pangsit Goreng Kuah Keju', price: 18000, desc: 'Pangsit Goreng dengan siraman kuah keju yang creamy, lembut berkuah di dalam.', bs: false },
      { id: 'cem9',  name: 'Cheese Roll',              price: 17000, desc: 'Gulungan isian keju, digoreng matang, tekstur lembut, rasa cheesy.', bs: false },
      { id: 'cem10', name: 'Gorengan Udang Keju',      price: 22000, desc: 'Gorengan Udang Ayam Cincang dengan isian Keju Mozarella.', bs: false },
      { id: 'cem11', name: 'Risol Matcha & Chocolate', price: 18000, desc: 'Risol berisi Disi cream matcha dan keju, dilapisi tepung roti, digoreng renyah.', bs: false },
      { id: 'cem12', name: 'Otak-Otak Goreng',         price: 17000, desc: 'Camilan gurih kenyal berbahan dasar daging ikan tenggiri, cocolan saus.', bs: false },
    ]
  },
  {
    id: 'makberat',
    label: '🍱 Makanan Berat',
    desc: 'Hidangan berat untuk mengisi energimu, pilihan nasi tersedia!',
    items: [
      { id: 'mb1', name: 'Nasi Goreng Kebuli Kambing', price: 34000, desc: 'Best Seller! Nasi Goreng rempah khas timur tengah, Nasi Kebuli, Kambing, Baso, Telor Goreng, Acar & Emping.', bs: true },
      { id: 'mb2', name: 'Nasi Goreng Special',        price: 28000, desc: 'Nasi Goreng yang disajikan dengan sosis & Telor Ceplok Mata Sapi / Dadar.', bs: false },
      { id: 'mb3', name: 'Nasi Goreng Kebuli Ayam',    price: 30000, desc: 'Nasi Goreng rempah khas timur tengah, Nasi Kebuli, Ayam, Baso, Telor, Acar & Emping.', bs: false },
      { id: 'mb4', name: 'Chicken Blackpepper',        price: 30000, desc: 'Rice Bowls Ayam Goreng Tepung dengan sauce blackpepper homemade.', bs: false },
      { id: 'mb5', name: 'Chicken Pop',                price: 30000, desc: 'Varian Sambal: Matah, Lada Garam, Geprek, Sambal Ijo, Sambal Cikur.', bs: false },
      { id: 'mb6', name: 'Baso Aci',                   price: 24000, desc: 'Baso Aci Ayam Kuah dengan berbagai topping: siomay kering, rebus, cuanki, so\'un, dan sukro.', bs: false },
      { id: 'mb7', name: 'Mie Nyemek',                 price: 25000, desc: 'Bakmie kuah khas Jawa dimodifikasi dengan sosis, baso, telor orak-arik dan sayur.', bs: false },
      { id: 'mb8', name: 'Beef Teriyaki',              price: 22000, desc: 'Daging sapi dengan saus teriyaki manis gurih, nasi, telor dan salad mayonaise.', bs: false },
      { id: 'mb9', name: 'Mie Goreng',                 price: 23000, desc: 'Mie digoreng tumis khas Indonesia, topping sayuran, telur, sosis dan bakso.', bs: false },
      { id: 'mb10', name: 'Nasi Kulit Ayam',           price: 22000, desc: 'Nasi, Kulit Ayam, Telor orak-arik dengan sambal dan lalapan.', bs: false },
      { id: 'mb11', name: 'Nasi Telor Gimbal',         price: 20000, desc: 'Nasi Telor ala padang / barendo dengan sambel dan lalapan.', bs: false },
      { id: 'mb12', name: 'Paru Mercon',               price: 30000, desc: 'Paru sapi bumbu pedas "meledak" (banyak cabai), gurih, sedikit manis, tekstur kenyal agak kering.', bs: false },
    ]
  },
];
 
// Add-on data
const addonData = [
  { name: 'Cream Masiabro', price: 'Rp 6.000' },
  { name: 'Extra Espresso',  price: 'Rp 6.000' },
  { name: 'Extra Oatside',   price: 'Rp 10.000' },
  { name: 'Extra Syrup',     price: 'Rp 5.000' },
  { name: 'Extra Cup',       price: 'Rp 1.000' },
  { name: 'Extra Ice',       price: 'Rp 2.000' },
];
 
// Pilihan Nasi info
const nasi_options = 'Pilihan Nasi: Nasi Putih / Nasi Daun Jeruk / Nasi Tutug Oncom';
 
// ── CART STATE ────────────────────────────────────────────────────────────────
let cart = {};
 
// ── HELPERS ──────────────────────────────────────────────────────────────────
const fmt = n => 'Rp ' + n.toLocaleString('id-ID');
 
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}
 
function esc(s) { return s.replace(/'/g, "\\'"); }
 
// ── NAVIGATION ────────────────────────────────────────────────────────────────
function goTo(id) {
  const el = id === 'hero' ? document.querySelector('.hero') : document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('navToggle').classList.remove('open');
}
 
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('navToggle').classList.toggle('open');
}
 
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
});
 
// ── CART SIDEBAR ──────────────────────────────────────────────────────────────
function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}
function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}
 
// ── CART LOGIC ────────────────────────────────────────────────────────────────
function addToCart(id, name, price, delta = 1) {
  if (!cart[id]) cart[id] = { name, price, qty: 0 };
  cart[id].qty = Math.max(0, cart[id].qty + delta);
  if (cart[id].qty === 0) delete cart[id];
  renderCart();
  updateCardState(id);
}
 
function removeFromCart(id) {
  delete cart[id];
  renderCart();
  updateCardState(id);
  showToast('Item dihapus 🗑');
}
 
function clearCart() {
  if (!Object.keys(cart).length) return;
  if (!confirm('Kosongkan semua keranjang?')) return;
  cart = {};
  renderCart();
  document.querySelectorAll('.btn-add-cart').forEach(b => { b.textContent = '+ Keranjang'; b.classList.remove('in-cart'); });
  document.querySelectorAll('.qty-display').forEach(e => e.textContent = '0');
  showToast('Keranjang dikosongkan');
}
 
function getTotal() { return Object.values(cart).reduce((s, i) => s + i.price * i.qty, 0); }
function getCount() { return Object.values(cart).reduce((s, i) => s + i.qty, 0); }
 
// ── RENDER CART ───────────────────────────────────────────────────────────────
function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');
  const badge = document.getElementById('cartBadge');
 
  const keys = Object.keys(cart);
  badge.textContent = getCount();
  badge.classList.add('pop');
  setTimeout(() => badge.classList.remove('pop'), 300);
 
  // Clear old rows
  [...itemsEl.children].forEach(c => { if (!c.classList.contains('cart-empty')) c.remove(); });
 
  if (!keys.length) {
    emptyEl.style.display = 'block';
    footerEl.style.display = 'none';
    return;
  }
  emptyEl.style.display = 'none';
  footerEl.style.display = 'block';
 
  keys.forEach(id => {
    const { name, price, qty } = cart[id];
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div>
        <div class="cart-item-name">${name}</div>
        <div class="cart-item-price">${fmt(price)} × ${qty}</div>
        <div class="cart-item-controls">
          <button class="btn-qty" onclick="addToCart('${esc(id)}','${esc(name)}',${price},-1)">−</button>
          <span class="qty-display">${qty}</span>
          <button class="btn-qty" onclick="addToCart('${esc(id)}','${esc(name)}',${price},1)">+</button>
          <button class="cart-item-delete" onclick="removeFromCart('${esc(id)}')">🗑</button>
        </div>
      </div>
      <div class="cart-item-subtotal">${fmt(price * qty)}</div>
    `;
    itemsEl.appendChild(row);
  });
  totalEl.textContent = fmt(getTotal());
}
 
// ── UPDATE MENU CARD STATE ─────────────────────────────────────────────────────
function updateCardState(id) {
  const qty = cart[id] ? cart[id].qty : 0;
  document.querySelectorAll(`[data-item-id="${id}"] .qty-display`).forEach(el => el.textContent = qty);
  document.querySelectorAll(`[data-item-id="${id}"] .btn-add-cart`).forEach(btn => {
    btn.textContent = qty > 0 ? `✓ ${qty} di keranjang` : '+ Keranjang';
    btn.classList.toggle('in-cart', qty > 0);
  });
}
 
// ── BUILD MENU CARD ───────────────────────────────────────────────────────────
function buildCard(item) {
  const qty = cart[item.id] ? cart[item.id].qty : 0;
  return `
    <div class="menu-card" data-item-id="${item.id}">
      <div class="menu-card-info">
        <div class="menu-card-name">${item.name}${item.bs ? ' <span class="menu-card-bs">Best Seller</span>' : ''}</div>
        ${item.desc ? `<div class="menu-card-desc">${item.desc}</div>` : ''}
        <div class="menu-card-price">${fmt(item.price)}</div>
      </div>
      <div class="menu-card-controls">
        <button class="btn-qty" onclick="addToCart('${item.id}','${esc(item.name)}',${item.price},-1)">−</button>
        <span class="qty-display">${qty}</span>
        <button class="btn-qty" onclick="addToCart('${item.id}','${esc(item.name)}',${item.price},1)">+</button>
        <button class="btn-add-cart ${qty > 0 ? 'in-cart' : ''}"
          onclick="quickAdd('${item.id}','${esc(item.name)}',${item.price})">
          ${qty > 0 ? `✓ ${qty} di keranjang` : '+ Keranjang'}
        </button>
      </div>
    </div>
  `;
}
 
function quickAdd(id, name, price) {
  if (!cart[id]) {
    cart[id] = { name, price, qty: 1 };
    showToast(`☕ ${name} ditambahkan!`);
  }
  renderCart();
  updateCardState(id);
  openCart();
}
 
// ── BUILD TABS & MENU ─────────────────────────────────────────────────────────
function buildTabs() {
  const bar = document.getElementById('tabBar');
  const allBtn = document.createElement('button');
  allBtn.className = 'tab-btn active';
  allBtn.textContent = '✦ Semua Menu';
  allBtn.onclick = () => showTab('semua', allBtn);
  bar.appendChild(allBtn);
 
  menuData.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn';
    btn.textContent = cat.label;
    btn.onclick = () => showTab(cat.id, btn);
    bar.appendChild(btn);
  });
}
 
function buildMenuContent() {
  const container = document.getElementById('menuContent');
  container.innerHTML = '';
 
  // ── All section ──
  const allSec = document.createElement('div');
  allSec.className = 'menu-cat-section active';
  allSec.id = 'cat-semua';
  const allGrid = document.createElement('div');
  allGrid.className = 'all-grid';
 
  menuData.forEach(cat => {
    const block = document.createElement('div');
    block.className = 'all-cat-block';
    block.innerHTML = `
      <div class="all-cat-block">
        <div class="cat-block-title">${cat.label}</div>
        ${cat.items.map(buildCard).join('')}
      </div>
    `;
    allGrid.appendChild(block);
  });
  allSec.appendChild(allGrid);
  container.appendChild(allSec);
 
  // ── Per-category sections ──
  menuData.forEach(cat => {
    const sec = document.createElement('div');
    sec.className = 'menu-cat-section';
    sec.id = `cat-${cat.id}`;
    sec.innerHTML = `
      <div class="cat-header">
        <h3>${cat.label}</h3>
        ${cat.desc ? `<p>${cat.desc}</p>` : ''}
        ${cat.id === 'makberat' ? `<p style="margin-top:0.5rem;font-size:0.8rem;color:var(--rust);font-weight:600;">${nasi_options}</p>` : ''}
      </div>
      <div class="single-grid">
        ${cat.items.map(buildCard).join('')}
      </div>
    `;
    container.appendChild(sec);
  });
}
 
function showTab(id, btn) {
  document.querySelectorAll('.menu-cat-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`cat-${id}`);
  if (target) target.classList.add('active');
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}
 
// ── BUILD ADD-ON ──────────────────────────────────────────────────────────────
function buildAddon() {
  const el = document.getElementById('addonCards');
  el.innerHTML = addonData.map(a => `
    <div class="addon-card">
      <div class="addon-card-name">${a.name}</div>
      <div class="addon-card-price">${a.price}</div>
    </div>
  `).join('');
}
 
// ── ORDER VIA WA ──────────────────────────────────────────────────────────────
function orderViaWA() {
  const keys = Object.keys(cart);
  if (!keys.length) {
    showToast('Keranjang masih kosong! Pilih menu dulu 😊');
    openCart();
    return;
  }
  const note = document.getElementById('cartNote')?.value.trim() || '';
 
  let msg = '☕ *Halo Sisijalankopi! Saya mau pesan:*\n\n';
  keys.forEach((id, i) => {
    const { name, price, qty } = cart[id];
    msg += `${i + 1}. *${name}*\n   ${qty} × ${fmt(price)} = *${fmt(price * qty)}*\n`;
  });
  msg += `\n━━━━━━━━━━━━━━━━━\n`;
  msg += `*TOTAL: ${fmt(getTotal())}*\n`;
  if (note) msg += `\n📝 *Catatan:* ${note}\n`;
  msg += `\nTerima kasih! 🙏`;
 
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}
 
// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildTabs();
  buildMenuContent();
  buildAddon();
  renderCart();
});