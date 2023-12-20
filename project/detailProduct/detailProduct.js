let detailItemJson = localStorage.getItem("detailProduct");
let detailItem = JSON.parse(detailItemJson);

// IMAGE FILTER
let content = "";
for (let i = 0; i < detailItem.img.length; i++) {
  content += `
    <div class="imgFilter">
        <img src="${detailItem.img[i]}" onclick= "changeimg('${detailItem.img[i]}')" alt="">
    </div>
    `;
}
let imageList = document.querySelector(".imageList");
imageList.innerHTML = content;

let imageMain = document.querySelector(".imgShow");
imageMain.innerHTML = `<img src="${detailItem.img[1]}" class="imgMain" alt="product-image">`
// imageMain.src=detailItem.img[1]

// change img:
function changeimg(src){
  let imageMain = document.querySelector(".imgShow");
  imageMain.innerHTML = `<img src="${src}" class="imgMain" alt="product-image">`
}

// PRODUCT INFOR:
let info = `
    <div class="info">
        <h1>${detailItem.nameProduct}</h1>
        <p class="price">${Number(detailItem.price) + "VND"}</p>
        <hr>
        <p>${detailItem.describe}</p>
        <button>${detailItem.size[0]}</button>
        <button>${detailItem.size[1]}</button>
        <button>${detailItem.size[2]}</button>
        <button>${detailItem.size[3]}</button>
        <hr>
        <p>SKU: ${detailItem.id}</p>
        <p>Category: ${detailItem.category}</p>
        <button onclick="addToCart('${
          detailItem.id
        }')" class="btn">Add to Cart</button>
    </div> 
    `;
let productInfo = document.querySelector(".productInfo");
productInfo.innerHTML = info;


// ADD TO CART

function addToCart(i) {
    let listCart
    if(JSON.parse(localStorage.getItem("listCart")).length!=0){
       listCart = JSON.parse(localStorage.getItem("listCart"))
    }
    else{
        listCart = 0
    }
    console.log(listCart)
  let item1 = products.find((it) => {
    return it.id == i;
  });
  let flag = false;
  let index = -1;
  for (let j = 0; j < listCart.length; j++) {
    if (listCart[j].item.id == i) {
      flag = true;
      index = j;
    }
  }
  if (flag) {
    listCart[index].sl++;
  } else {
    let cartitem = {
      sl: 1,
      item: item1,
    };
    listCart.push(cartitem);
    alert('Đã thêm sản phẩm vào giỏ hàng!')
  }
  let jsonaddToCart = JSON.stringify(listCart); // chuyen tu mang ve string
  localStorage.setItem("listCart", jsonaddToCart); // luu vao loacal storage

  showCart()
}

// Show listCart:
function showCart(){
  let listCartJson = localStorage.getItem("listCart");
  listCart = JSON.parse(listCartJson);

  document.querySelector('.total').innerHTML = listCart.length
}
showCart()

// MENU TRANSACTION
function shownav() {
  let btnmenu = document.querySelector(".menu");
  btnmenu.classList.add("show");
}
function closenav() {
  let btnmenu = document.querySelector(".menu");
  btnmenu.classList.remove("show");
}

// RECOMMEND ITEMS:
let dataProductJson = localStorage.getItem("dataProduct");
let dataProduct = JSON.parse(dataProductJson);

let item = "";
for (let i = 0; i < dataProduct.length; i++) {
  if (dataProduct[i].collection == "All time Basic") {
    item += `
    <div onclick='detailItem(${i})' class="contentItem">
        <a href="../detailProduct/detailProduct.html">
            <img src="${dataProduct[i].img[0]}" alt="">
            <p class="collection">${dataProduct[i].collection}</p>
            <p>${dataProduct[i].nameProduct}</p>
            <p class="price">${dataProduct[i].price + "VND"}</p>
        </a>
        <button onclick="addToCart(${i})" class="btn">Add to cart</button>
    </div>
    `;
  }
}
let recommendContent = document.querySelector(".recommendList");
recommendContent.innerHTML = item;
