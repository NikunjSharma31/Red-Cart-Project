product = document.querySelectorAll(".productId");
fullImage = document.querySelector("#fullImage");
for (let i = 0; i < product.length; i++) {

    product[i].addEventListener("click", function () {
        window.location.href = "productDetail.html";
    });

}

product1 = {
    Product_Name: "Red Printed T-shirt",
    Price: 400,
    Product_Id: "product1",
    Image: "images/product-1.jpg"
};

product2 = {
    Product_Name: "HRx Men's Shoe",
    Price: 899,
    Product_Id: "product2",
    Image: "images/product-2.jpg"
};

localStorage.setItem("product1", JSON.stringify(product1));
localStorage.setItem("product2", JSON.stringify(product2));

