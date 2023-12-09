// lấy dữ liệu từ localStorage về
let dataProductJson = localStorage.getItem("dataProduct");
let dataProduct = JSON.parse(dataProductJson);

let content="";
for(let i=0; i<dataProduct.length; i++){
    content += `
    <div onclick='detailItem(${i})' class="contentItem">
        <a href="../detailProduct/detailProduct.html">
            <img src="${dataProduct[i].img[0]}" alt="">
            <p class="collection">${dataProduct[i].collection}</p>
            <p>${dataProduct[i].nameProduct}</p>
            <p class="price">${dataProduct[i].price + 'VND'}</p>
        </a>
        <button onclick="addToCart(${i})" class="btn">Add to cart</button>
    </div>
    `
}    
let contentProduct=document.querySelector(".render_content")
contentProduct.innerHTML=content

// COLLECTION:
let contentAllTime="";
for(let i=0; i<dataProduct.length; i++){
    if(dataProduct[i].collection == "All time Basic"){
      contentAllTime += `
    <div onclick='detailItem(${i})' class="contentItem">
        <a href="../detailProduct/detailProduct.html">
            <img src="${dataProduct[i].img[0]}" alt="">
            <p class="collection">${dataProduct[i].collection}</p>
            <p>${dataProduct[i].nameProduct}</p>
            <p class="price">${dataProduct[i].price + 'VND'}</p>
        </a>
        <button onclick="addToCart(${i})" class="btn">Add to cart</button>
    </div>
    `
    }
}    
let contentProduct2=document.querySelector(".all-time")
contentProduct2.innerHTML=contentAllTime

// COLLECTION 2
let contentThePower="";
for(let i=0; i<dataProduct.length; i++){
    if(dataProduct[i].collection == "The Power of Intention"){
      contentThePower += `
    <div onclick='detailItem(${i})' class="contentItem">
        <a href="../detailProduct/detailProduct.html">
            <img src="${dataProduct[i].img[0]}" alt="">
            <p class="collection">${dataProduct[i].collection}</p>
            <p>${dataProduct[i].nameProduct}</p>
            <p class="price">${dataProduct[i].price + 'VND'}</p>
        </a>
        <button onclick="addToCart(${i})" class="btn">Add to cart</button>
    </div>
    `
    }
}    
let contentProduct3=document.querySelector(".the-power")
contentProduct3.innerHTML=contentThePower

// MENU TRANSACTION
function shownav(){
    let btnmenu = document.querySelector(".menu")
    btnmenu.classList.add("show")
}
function closenav(){
    let btnmenu = document.querySelector(".menu")
    btnmenu.classList.remove("show")
}

function detailItem(i){
    localStorage.setItem('detailProduct', JSON.stringify(dataProduct[i]))
}
// ADD TO CART
let listCart = []

function addToCart(i){
    let flag = false
    let index=-1
    console.log(listCart)
    for (let j=0; j<listCart.length; j++){
        if(dataProduct[i].id == dataProduct[j].id){
            flag=true
            index=j
        }
    }
    // check
    if(flag){
        listCart[index].sl++
    }else{
        let cartitem={
            sl:1,
            item: dataProduct[i]
        }
        listCart.push(cartitem)
    }

    console.log(listCart)
    let jsonaddToCart=JSON.stringify(listCart)  // chuyen tu mang ve string 
    localStorage.setItem('listCart', jsonaddToCart)  // luu vao loacal storage 

    // Show listCart:
    let listCartJson = localStorage.getItem("listCart");
    listCart = JSON.parse(listCartJson);

    document.querySelector('.total').innerHTML = listCart.length
}