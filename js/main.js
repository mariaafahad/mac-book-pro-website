

// memory cost
const firstMemory = document.getElementById("first-memory");
const secondMemory = document.getElementById("second-memory");
const extraMemoryCost = document.getElementById("extra-memory-cost");


firstMemory.addEventListener('click', function () {
    extraMemoryCost.innerText = "0";
    updateTotal();
});
secondMemory.addEventListener('click', function () {
    extraMemoryCost.innerText = "180";
    updateTotal();
});



// storage cost
const firstStorageCost = document.getElementById("first-storage");

const secondStorageCost = document.getElementById("second-storage");
const thirdStorageCost = document.getElementById("third-storage");
const extraStorageCost = document.getElementById("extra-storage-cost");

firstStorageCost.addEventListener('click', function () {
    extraStorageCost.innerText = "0";
    updateTotal();
});

secondStorageCost.addEventListener('click', function () {
    extraStorageCost.innerText = "100";
    updateTotal();
});
thirdStorageCost.addEventListener('click', function () {
    extraStorageCost.innerText = "180";
    updateTotal();
});

// delivery cost

const freeDelivery = document.getElementById("first-delivery-date");
const secondDeliveryDate = document.getElementById("second-delivery-date");
const deliveryCharge = document.getElementById("delivery-cost");

freeDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = "0";
    updateTotal();
});
secondDeliveryDate.addEventListener('click', function () {
    deliveryCharge.innerText = "20";
    updateTotal();
});

// total variable

const bestPrice = document.getElementById("best-price");
const totalPrice = document.getElementById("price");
let finalTotal = document.getElementById("final-total");

// add function

function updateTotal() {
    bestPrice.innerText = "1299";
    const fixedPrice = Number(bestPrice.innerText);
    const memoryPrice = Number(extraMemoryCost.innerText);
    const storagePrice = Number(extraStorageCost.innerText);
    const deliveryPrice = Number(deliveryCharge.innerText)
    const grandTotal = fixedPrice + memoryPrice + storagePrice + deliveryPrice;
    totalPrice.innerText = grandTotal;
};


// cupon codes 



const couponCode = document.getElementById("promo");
const apply = document.getElementById("apply-button");
const promoCode = document.getElementById("promo");

function discount() {
    if (promoCode.value === "stevekaku") {
        let discountTotal = totalPrice.innerText - (totalPrice.innerText * 20 / 100);
        finalTotal.innerText = Math.round(discountTotal);
        document.getElementById("apply-button").disabled = true;
        document.getElementById("apply-button").style.backgroundColor = "grey";
        document.getElementById("apply-button").style.color = "light-grey";
        document.getElementById("apply-button").style.cursor = "none";
        promoCode.disabled = true;
    }
};









