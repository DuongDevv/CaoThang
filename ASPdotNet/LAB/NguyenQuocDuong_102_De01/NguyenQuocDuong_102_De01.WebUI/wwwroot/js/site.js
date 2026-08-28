document.addEventListener("DOMContentLoaded", function () {
    console.log("Vanilla JS Loaded without Icons!");

    //TƯƠNG TÁC HOVER SỬ DỤNG JAVASCRIPT THUẦN (VANILLA JS) 
    const productCards = document.querySelectorAll(".card-product");
    productCards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            this.classList.add("card-product--hovered");
        });

        card.addEventListener("mouseleave", function () {
            this.classList.remove("card-product--hovered");
        });
    });

    // 2. ADD TO CART NOTIFICATION: Intercept form submit
    const cartForms = document.querySelectorAll(".add-to-cart-form");
    cartForms.forEach(form => {
        form.addEventListener("submit", function (e) {
            const cardBody = this.closest(".card-product__body");
            const productName = cardBody ? cardBody.querySelector(".card-product__title").innerText.trim() : "Sản phẩm";
            
            alert(`[THÔNG BÁO] Đã thêm sản phẩm "${productName}" vào giỏ hàng thành công!`);
        });
    });

    // 3. TOGGLE DESCRIPTION DISPLAY: Toggle .card-product__description--hidden
    const toggleButtons = document.querySelectorAll(".btn-toggle-info");
    toggleButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const cardBody = this.closest(".card-product__body");
            if (cardBody) {
                const descElement = cardBody.querySelector(".card-product__description");
                if (descElement) {
                    descElement.classList.toggle("card-product__description--hidden");
                    if (descElement.classList.contains("card-product__description--hidden")) {
                        this.innerText = 'Hiện Mô tả';
                    } else {
                        this.innerText = 'Ẩn Mô tả';
                    }
                }
            }
        });
    });
});
