let cartConunt = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCounnt;
}

const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function changeImage(index) {
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`; // Kullanıcı genişlik birimi
    updateDots();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % dots.length;
    changeImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    changeImage(currentIndex);
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

document.querySelector('.nav-button.right').addEventListener('click', nextImage);
document.querySelector('.nav-button.left').addEventListener('click', prevImage);

setInterval(nextImage, 3000); // Fotoğrafı 3 saniyede bir değiştir


window.addEventListener('load', () => {
    const wrapper = document.getElementById('products-wrapper');
    wrapper.style.transform = 'translateX(0)'; // Perde açılma efekti
});

document.querySelectorAll('#blogs .flex').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('bg-gray-100');
    });
    item.addEventListener('mouseout', () => {
      item.classList.remove('bg-gray-100');
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    // User ikonu ve giriş kartı
    const userIcon = document.getElementById('user-icon');
    const loginCard = document.getElementById('login-card');

    // User ikonuna tıklandığında giriş kartını aç/kapat
    userIcon.addEventListener('click', function(e) {
        e.preventDefault();
        loginCard.classList.toggle('hidden');
    });

});
document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.getElementById('cart-icon');
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    const cartCount = document.getElementById('cart-count'); // Sepet sayısı göstergesi
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    let cart = [];
    let totalPrice = 0;

    // Sepet ikonuna tıklandığında dropdown menüyü aç/kapat
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        cartDropdown.classList.toggle('hidden');
        updateCart();
    });

    // Ürün ekleme işlevi
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const productElement = e.target.closest('.product');
            const productData = JSON.parse(productElement.getAttribute('data-product'));
            addToCart(productData);
        });
    });

    // Sepete ürün ekleme işlevi
    function addToCart(product) {
        cart.push(product);
        totalPrice += product.price;
        updateCart();
    }

    // Sepetten ürün silme işlevi
    function removeFromCart(index) {
        totalPrice -= cart[index].price;
        cart.splice(index, 1);
        updateCart();
    }

    // Sepet sayısını ve içeriğini güncelleme
    function updateCart() {
        cartItems.innerHTML = '';
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="text-sm text-gray-500">Sepetinizde ürün bulunmamaktadır.</p>';
            checkoutBtn.classList.add('hidden'); // Satın al butonunu gizle
        } else {
            cart.forEach((product, index) => {
                const item = document.createElement('li');
                item.classList.add('flex', 'justify-between', 'items-center', 'border-b', 'pb-2');
                item.innerHTML = `
                    <span>${product.name}</span>
                    <div class="flex items-center">
                        <span class="mr-2">${product.price.toFixed(2)}₺</span>
                        <button class="text-red-500 text-sm" onclick="removeFromCart(${index})">Sil</button>
                    </div>
                `;
                cartItems.appendChild(item);
            });
            checkoutBtn.classList.remove('hidden'); // Satın al butonunu göster
        }

        // Toplam fiyatı güncelle
        totalPriceElement.textContent = `Toplam: ${totalPrice.toFixed(2)}₺`;

        // Sepet ikonundaki sayıyı güncelle
        cartCount.textContent = cart.length;
        cartCount.classList.toggle('hidden', cart.length === 0); // Sayı 0 ise gizle
    }

    // Global olarak kullanılabilmesi için removeFromCart fonksiyonunu window nesnesine ekleyin
    window.removeFromCart = removeFromCart;
});



document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.social-icon');
    const tooltip = document.getElementById('tooltip');

    tooltips.forEach(icon => {
        icon.addEventListener('mouseenter', function(event) {
            tooltip.innerHTML = event.target.getAttribute('data-tooltip');
            tooltip.style.left = `${event.clientX}px`;
            tooltip.style.top = `${event.clientY + 20}px`;
            tooltip.classList.remove('hidden');
        });

        icon.addEventListener('mouseleave', function() {
            tooltip.classList.add('hidden');
        });
    });
});

