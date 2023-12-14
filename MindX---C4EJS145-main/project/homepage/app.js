let dataProductJson = localStorage.getItem("dataProduct");
let dataProduct = JSON.parse(dataProductJson);

function getTrendingProducts() {
  // Kiểm tra xem có dữ liệu hay không
  if (dataProduct) {
    // Lọc chỉ những sản phẩm có tags là "Trend"
    let trendingProducts = dataProduct.filter(
      (product) => product.tags === "Trend"
    );

    // Trả về mảng sản phẩm trending
    return trendingProducts;
  }
}

// Sử dụng hàm để lấy sản phẩm trending
let trendingProducts = getTrendingProducts();

// Show các sản phẩm trending
let content = "";
for (let i = 0; i < trendingProducts.length; i++) {
  content += `
    <div onclick='detailItem(${i})' class="contentItem">
        <a href="../detailProduct/detailProduct.html" target="_blank">
            <img src="${trendingProducts[i].img[1]}" alt="">
            <p class="collection">${trendingProducts[i].collection}</p>
            <p>${trendingProducts[i].nameProduct}</p>
            <p class="price">${trendingProducts[i].price + "VND"}</p>
        </a>
        <button onclick="addToCart(${i})" class="btn">Add to cart</button>
    </div>
    `;
}
let contentProduct = document.querySelector(".trendProductList");
contentProduct.innerHTML = content;

// MENU TRANSACTION
function shownav() {
  let btnmenu = document.querySelector(".menu");
  btnmenu.classList.add("show");
}
function closenav() {
  let btnmenu = document.querySelector(".menu");
  btnmenu.classList.remove("show");
}

// TRASACTION LEFT TO RIGHT
window.addEventListener("scroll", function (event) {
  let load = document.querySelectorAll(".leftLoad");
  let y = window.pageYOffset + 600;
  for (i = 0; i < load.length; i++) {
    if (load[i].offsetTop < y) {
      load[i].classList.add("leftHien");
    }
  }
});

// TRASACTION BOTTTOM TO TOP
window.addEventListener("scroll", function (event) {
  let load = document.querySelectorAll(".bottomLoad");
  let y = window.pageYOffset + 600;
  for (i = 0; i < load.length; i++) {
    if (load[i].offsetTop < y) {
      load[i].classList.add("bottomHien");
    }
  }
});

// GET ITEM
function detailItem(i) {
  console.log[i];
  localStorage.setItem("detailProduct", JSON.stringify(dataProduct[i]));
}

function addToCart(i) {
  let listCart;
  if (JSON.parse(localStorage.getItem("listCart")).length != 0) {
    listCart = JSON.parse(localStorage.getItem("listCart"));
  } else {
    listCart = 0;
  }
  let flag = false;
  let index = -1;
  console.log(listCart);
  for (let j = 0; j < listCart.length; j++) {
    if (dataProduct[i].id == dataProduct[j].id) {
      flag = true;
      index = j;
    }
  }
  // check
  if (flag) {
    listCart[index].sl++;
  } else {
    let cartitem = {
      sl: 1,
      item: dataProduct[i],
    };
    listCart.push(cartitem);
  }

  console.log(listCart);
  let jsonaddToCart = JSON.stringify(listCart); // chuyen tu mang ve string
  localStorage.setItem("listCart", jsonaddToCart); // luu vao loacal storage

  // Show listCart:
  let listCartJson = localStorage.getItem("listCart");
  listCart = JSON.parse(listCartJson);

  document.querySelector(".total").innerHTML = listCart.length;
}

//   typing
flag = false;
    window.addEventListener("scroll", function (event) {
        let renderAdd = document.querySelector(".addContent");
       
        let y = window.pageYOffset;
        if (renderAdd.offsetTop < y && !flag ) {
          flag = true;
          const text =
            '"The Power of Intention" - bộ sưu tập thời trang mới đầy sức mạnh và ý định. Tại đây, chúng tôi tôn vinh sự mạnh mẽ của những ý chí và quyết tâm, biến chúng thành những tác phẩm nghệ thuật trên từng đường may và chất liệu.';
          let index = 0;
          const typingText = document.getElementById("typing-text");
      
          function type() {
            typingText.textContent = text.slice(0, index++);
            if (index <= text.length) {
              setTimeout(type, 30); // Thời gian trễ giữa các ký tự
            }
          }
      
          type();
        }
      });
      