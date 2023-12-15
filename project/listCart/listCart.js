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
            <td class="text-right">${(Number(listCart[i].sl)*Number(listCart[i].item.price)).toFixed(3)  +'VND'}</td>
        </tr>
        `;
    }    
    let contentItem=document.querySelector(".cart-row",)
    contentItem.innerHTML=content
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
    total()
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
    total()

}
function total(){
    let total = 0
    for(let i=0; i<listCart.length; i++){
        total += Number(listCart[i].sl)*Number(listCart[i].item.price)
    }
    document.querySelector('.total').innerHTML = listCart.length
    document.querySelector('.total-price').innerHTML = total.toFixed(3)
}
total()