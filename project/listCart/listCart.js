// MENU TRANSACTION
function shownav(){
    let btnmenu = document.querySelector(".menu")
    btnmenu.classList.add("show")
}
function closenav(){
    let btnmenu = document.querySelector(".menu")
    btnmenu.classList.remove("show")
}
let listCart
let totalPrice = 0
function render(){ 
    // lấy dữ liệu từ localStorage về
    let listCartJson = localStorage.getItem("listCart");
    listCart = JSON.parse(listCartJson);
    let content="";
    for(let i=0; i<listCart.length; i++){
        let total = Number(listCart[i].sl)*Number(listCart[i].item.price)
        content += `
        <tr>
            <td class="text-center"><img src="${listCart[i].item.img[0]}" alt=""></td>
            <td><h3>${listCart[i].item.nameProduct}</h3></td>
            <td class="text-center">${listCart[i].item.price}</td>
            <td>
                <div class="quantity text-center">
                    <button class="quantity-btn" onclick="decreaseQuantity('${listCart[i].item.id}')">-</button>
                    <p>${listCart[i].sl}</p>
                    <button class="quantity-btn" onclick="increaseQuantity('${listCart[i].item.id}')">+</button>
                </div>
            </td>
            <td class="text-right">${(total.toFixed(3)) + 'VND'}</td>
        </tr>
        `;
        totalPrice += total
    }    
    let contentItem=document.querySelector(".cart-row",)
    contentItem.innerHTML=content

    // QUANTITY
    // Get the quantity input element
    const quantityInput = document.getElementById('quantity-input');
    document.querySelector('.total').innerHTML = listCart.length
    document.querySelector('.total-price').innerHTML = totalPrice.toFixed(3)
}

render()

// Function to increase the quantity
function increaseQuantity(id) {
    let product = listCart.find(data => {
        return data.item.id == id
    })
    product.sl ++
    let jsonaddToCart=JSON.stringify(listCart)  // chuyen tu mang ve string 
    localStorage.setItem('listCart', jsonaddToCart)  // luu vao loacal storage 
    render()
}

// Function to decrease the quantity
function decreaseQuantity(id) {
    let product = listCart.find(data => {
        return data.item.id == id
    })
    product.sl --
    // Nếu số lượng là 0, xóa sản phẩm khỏi mảng
    if (product.sl === 0) {
        let productIndex = listCart.findIndex(data => data.item.id === id);
        listCart.splice(productIndex, 1);
    }
    let jsonaddToCart=JSON.stringify(listCart)  // chuyen tu mang ve string 
    localStorage.setItem('listCart', jsonaddToCart)  // luu vao loacal storage 
    render()

}