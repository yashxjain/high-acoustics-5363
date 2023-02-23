async function FetchData() {
    try {
        let res = await fetch("https://63ca379cf36cbbdfc7542735.mockapi.io/product")
        let data = await res.json()
        console.log(data)
         FilterData(data)
        //DisplayProduct(data)
    } catch (err) {
        console.log(err)
    }
}
FetchData()
let filterBy = document.getElementById("filter")
console.log(filterBy);
filterBy.addEventListener("change", () => {
    FetchData()
})
function FilterData(data) {
    let filterValue = filterBy.value
    if (filterValue === "") {
        DisplayProduct(data)
    } else {
        data = data.filter((product) => {
            // it will return boolean value
            return product.category == filterValue
        })
        DisplayProduct(data)
    }

}
let CartArr = JSON.parse(localStorage.getItem("product")) || []
let Container = document.getElementById("product-container")
function DisplayProduct(data) {
    Container.innerHTML = ""
    data.forEach((product) => {
        let card = document.createElement("div")
        let image = document.createElement("img")
        let brand = document.createElement("h3")
        let category = document.createElement("p")
        let details = document.createElement("p")
        let price = document.createElement("h4")
        let add_to_cart = document.createElement("button")
        add_to_cart.textContent = "Add to Cart"
        image.src = product.img;
        brand.textContent = product.brand;
        category.textContent = product.category;
        price.textContent = `₹${product.price}`;
        details.textContent = product.details
        add_to_cart.addEventListener("click", () => {
            if (checkDuplicate(product)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Product already in cart',
                    footer: '<a href="./products.html">Check cart once</a>'
                })

            } else {
                CartArr.push({ ...product, quantity: 1 })
                localStorage.setItem("product", JSON.stringify(CartArr))

                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Product added to Cart',
                    showConfirmButton: false,
                    timer: 1500
                })

            }
        })
        card.append(image, brand, price, details, category, add_to_cart)
        Container.append(card)
    })




}

function checkDuplicate(product) {
    for (let i = 0; i < CartArr.length; i++) {
        if (CartArr[i].id === product.id) {
            return true
        }
    }
    return false
}
////////////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////////////////


