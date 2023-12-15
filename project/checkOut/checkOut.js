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
            <td class="text-left"><img src="${listCart[i].item.img[0]}" alt="product-image"></td>
            <td class="text-left">
                <h3>${listCart[i].item.nameProduct}</h3>
                <p>Số lượng: ${listCart[i].sl}</p>
            </td>
            <td class="text-right">${(total.toFixed(3)) + 'VND'}</td>
        </tr>
        `;
        totalPrice += total
    }    
    let contentItem=document.querySelector(".cart-row",)
    contentItem.innerHTML=content

    document.querySelector('.total-price').innerHTML = totalPrice.toFixed(3)
}

render()

function order(){
    alert(`ĐẶT HÀNG THÀNH CÔNG!
Cảm ơn bạn đã lựa chọn Trâm Anh Store`)
}