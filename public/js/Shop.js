const productsArea = document.getElementById("shop-products");

const data = [
    {
        id: 1,
        name: "Pure Protien Bars",
        price: "$7.99",
        image: "/assets/products/7a186b32-af69-4466-bfab-b8c76642242a.a04c7b0900bed6660199ff53bc26f39f.jpeg"
    },
    {
        id: 2,
        name: "Six Star Creatine X3",
        price: "$9.99",
        image: "/assets/products/61c0oV0ar1L._AC_SX466_.jpg"
    },
    {
        id: 2,
        name: "Miconized Creatine",
        price: "$12.99",
        image: "/assets/products/61Oi8E1n-nL.jpg"
    },
    {
        id: 2,
        name: "Gold Standard Why Protien",
        price: "$19.99",
        image: "/assets/products/61u-qC6Z-mL._AC_SL1500_.jpg"
    },
    {
        id: 2,
        name: "Gold Standard Pre-workout Fruit Punch",
        price: "$14.99",
        image: "/assets/products/71auZO+BmwL._AC_SL1500_.jpg"
    },
    {
        id: 2,
        name: "Origin Organic Protien",
        price: "$19.99",
        image: "/assets/products/71KshkxukgL._SX385_.jpg"
    },
    {
        id: 2,
        name: "Woke AF Pre-workout",
        price: "$16.99",
        image: "/assets/products/044188.jpg"
    },
    {
        id: 2,
        name: "Premier Protien Milk",
        price: "$7.99",
        image: "/assets/products/eea5329a-d92f-4ff3-8921-b6a89f45e05a.d8a8ac2db0fec973757942c92674cf2a.jpeg"
    }
]

data.map((item) => {
    const product = document.createElement("div");
    product.className = "shop-products-item";
    // product.setAttribute("data-tilt")
    // VanillaTilt.init(product)

    const productImage = document.createElement("div");
    productImage.className = "shop-products-item-image";
    product.appendChild(productImage)

    const productImageImg = document.createElement("img");
    productImageImg.src = item.image.toString();
    productImage.appendChild(productImageImg);

    const productName = document.createElement("h2");
    productName.textContent = item.name.toString();
    product.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.textContent = item.price.toString();
    product.appendChild(productPrice)

    productsArea.appendChild(product);
})