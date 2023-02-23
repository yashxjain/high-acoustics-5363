let Cart = JSON.parse(localStorage.getItem("product")) || [];
let Containers = document.getElementById("cart-container");
function DisplayProduct(data) {
    let total = document.getElementById("cart-total")
    Containers.innerHTML = "";
    Cart.forEach((product) => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let brand = document.createElement("h3");
        let category = document.createElement("p");
        let details = document.createElement("p");
        let quantity = document.createElement("span");
        let price = document.createElement("h4");
        let remove = document.createElement("button");
        let Increment = document.createElement("button");
        let Decrement = document.createElement("button");
        quantity.textContent = product.quantity
        remove.textContent = "Buy Now";
        Increment.textContent = "+"
        Decrement.textContent = "-"
        image.src = product.img;
        brand.textContent = product.brand;
        category.textContent = product.category;
        price.textContent = `₹${product.price}`;
        details.textContent = product.details;
        remove.addEventListener("click", () => {
            Cart = Cart.filter((ele) => {
                return ele.id !== product.id
            })
            localStorage.setItem("product", JSON.stringify(Cart))
            DisplayProduct()
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Buy Successfull',
                showConfirmButton: false,
                timer: 1500
            })

        });
        Increment.addEventListener("click", () => {
            product = product.quantity++
            localStorage.setItem("product", JSON.stringify(Cart))
            DisplayProduct()
        });
        Decrement.addEventListener("click", () => {
            if (product.quantity > 1) {
                product = product.quantity--
                localStorage.setItem("product", JSON.stringify(Cart))
                DisplayProduct(data)
            }
        });
        card.append(image, brand, price, details, category, Increment, quantity, Decrement, remove);
        Containers.append(card);
    });

    let sum = 0
    for (let i = 0; i < Cart.length; i++) {
        sum += Cart[i].price * Cart[i].quantity
    }
    total.textContent = sum

}
DisplayProduct()