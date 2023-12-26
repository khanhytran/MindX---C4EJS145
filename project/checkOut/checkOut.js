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
            <td class="text-right">${(total.toLocaleString('en-US', { minimumFractionDigits: 3 })) + 'VND'}</td>
        </tr>
        `;
        totalPrice += total
    }    
    let contentItem=document.querySelector(".cart-row",)
    contentItem.innerHTML=content

    document.querySelector('.total-price').innerHTML = totalPrice.toLocaleString('en-US', { minimumFractionDigits: 3 })
}

render()

function getOrderInfo() {
    // Lấy thông tin từ các ô input trong form
    const name = document.querySelector('.delivery input[name="name"]').value;
    const phoneNumber = document.querySelector('.delivery input[name="phone"]').value;
    const address = document.querySelector('.delivery input[name="address"]').value;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;


    // Tạo đối tượng thông tin order
    const orderInfo = {
        name: name,
        phoneNumber: phoneNumber,
        address: address,
        paymentMethod: paymentMethod
    };

    // Tạo đối tượng order list từ listCart
    const orderList = listCart.map(item => ({
        nameProduct: item.item.nameProduct,
        quantity: item.sl,
        totalPrice: (item.sl * item.item.price).toLocaleString('en-US', { minimumFractionDigits: 3 }) + 'VND'
    }));

    // Log thông tin order và order list ra console
    console.log('Thông tin khách:', orderInfo);
    console.log('Order List:', orderList);
}

function order(){
    // Lấy thông tin order và order list
    getOrderInfo();

    // Reset listCart và totalPrice
    listCart = [];
    totalPrice = 0;

    // Lưu listCart vào local storage
    localStorage.setItem('listCart', JSON.stringify(listCart));

    alert(`ĐẶT HÀNG THÀNH CÔNG!
Cảm ơn bạn đã lựa chọn Trâm Anh Store`)
}