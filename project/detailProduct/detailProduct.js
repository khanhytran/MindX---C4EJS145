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
imageMain.innerHTML = `<img src="${detailItem.img[0]}" class="imgMain" alt="product-image">`
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
        <h4>Chọn kích thước: </h4>
        <div class="size">
          <button class="btn-size active" name="size" onclick="changeSize(this)">${detailItem.size[0]}</button>
          <button class="btn-size" name="size" onclick="changeSize(this)">${detailItem.size[1]}</button>
          <button class="btn-size" name="size" onclick="changeSize(this)">${detailItem.size[2]}</button>
          <button class="btn-size" name="size" onclick="changeSize(this)">${detailItem.size[3]}</button>
          <button class="btn-size" name="size" onclick="changeSize(this)">${detailItem.size[4]}</button>
        </div>
        <hr>
        <p>SKU: ${detailItem.id}</p>
        <p>Bộ sưu tập: ${detailItem.collection}</p>
        <p>Thể loại: ${detailItem.category}</p>
        <p>Share</p>
        <span>
        <button onclick="addToCart('${
          detailItem.id
        }')" class="btn-add">Thêm vào giỏ hàng</button>
    </div> 
    `;
let productInfo = document.querySelector(".productInfo");
productInfo.innerHTML = info;

// CHANGE SIZE:
function changeSize(button) {
  // Lấy tất cả các nút trong phần size
  let sizeButtons = document.querySelectorAll('.size button');

  // Xóa lớp active từ tất cả các nút
  sizeButtons.forEach(btn => {
      btn.classList.remove('active');
  });

  // Thêm lớp active cho nút được click
  button.classList.add('active');
}

// ADD TO CART

function addToCart(id){
  let listCart
  if(localStorage.getItem("listCart") == null){
      listCart = []
  }
  else{
      listCart = JSON.parse(localStorage.getItem("listCart"))
  }
  let item = dataProduct.find(dataItem => {
      return dataItem.id == id
  })
  let indexItem = listCart.findIndex(dataItem =>{
      return dataItem.item.id == id
  })
  // check
  if(indexItem != -1){
      listCart[indexItem].sl++
  }else{
      let cartitem={
          sl:1,
          item: item
      }
      listCart.push(cartitem)
      alert('Đã thêm sản phẩm vào giỏ hàng')
  }
  console.log(listCart)
  let jsonaddToCart=JSON.stringify(listCart)  // chuyen tu mang ve string 
  localStorage.setItem('listCart', jsonaddToCart)  // luu vao loacal storage 
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
