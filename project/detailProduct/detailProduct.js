let detailItemJson = localStorage.getItem("detailProduct")
let detailItem = JSON.parse(detailItemJson)

// IMAGE FILTER
let content="";
for(let i=0; i<(detailItem.img).length; i++){
    content += `
    <div class="imgFilter">
        <img src="${detailItem.img[i]}" alt="">
    </div>
    `
}  
let imageList=document.querySelector(".imageList")
imageList.innerHTML=content

// IMAGE SHOW
let imgcontent="";
for(let i=0; i<(detailItem.img).length; i++){
    imgcontent += `
    <div class="img">
        <img src="${detailItem.img[i]}" alt="">
    </div>
    `
}  
let imgShow=document.querySelector(".imgShow")
imgShow.innerHTML=imgcontent

// PRODUCT INFOR:
let info = `
    <div class="info">
        <h1>${detailItem.nameProduct}</h1>
        <p class="price">${Number(detailItem.price) + 'VND'}</p>
        <hr>
        <p>${detailItem.describe}</p>
        <hr>
        <p>SKU: ${detailItem.SKU}</p>
        <p>Category: ${detailItem.category}</p>
        <p>Tags: ${detailItem.tags}</p>
        <button onclick="addToCart(${i})" class="btn btn-success>Add to Cart</button>
    </div> 
    `
let productInfo=document.querySelector(".productInfo")
productInfo.innerHTML=info

// MENU TRANSACTION
function shownav(){
    let btnmenu = document.querySelector(".menu")
    btnmenu.classList.add("show")
}
function closenav(){
    let btnmenu = document.querySelector(".menu")
    btnmenu.classList.remove("show")
}

// RECOMMEND ITEMS:
let dataProductJson = localStorage.getItem("dataProduct");
let dataProduct = JSON.parse(dataProductJson);
console.log(dataProduct)

let item="";
for(let i=0; i<dataProduct.length; i++){
    if(dataProduct[i].collection == "All time Basic"){
        item += `
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
let recommendContent=document.querySelector(".recommendList")
recommendContent.innerHTML=item