//https://kea-alt-del.dk/t7/api/products?limit=100

const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");

fetch("https://kea-alt-del.dk/t7/api/products?brandname=" + brandname)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("template").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold

  copy.querySelector(".mærke").textContent = product.brandname;
  copy.querySelector(".navnPåProdukt").textContent = product.productdisplayname;
  copy.querySelector(".pris").textContent = product.price;
  copy.querySelector(".ny_pris").textContent = product.discount;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy
    .querySelector(".readMore")
    .setAttribute("href", `product.html?id=${product.id}`);

  //sold out
  if (product.soldout == 0) {
    copy.querySelector(".soldOut").remove();
  }

  if (product.discount == null) {
    copy.querySelector(".onSale").remove();
  }

  if (product.discount == null) {
    copy.querySelector(".dk_pris").remove();
  }

  if (product.discount == null) {
    copy.querySelector(".ny_pris").remove();
  }

  if (product.discount > null) {
    copy.querySelector(".ny_pris");
  }

  //appende
  document.querySelector("main.grid_1_1_1_1").appendChild(copy);
}

/*
  <template id="produktTemplate">
          <article class="produkt">
            <a href="product.html"
              ><img
                src="https://kea-alt-del.dk/t7/images/webp/640/1533.webp"
                alt=""
            /></a>
            <h3>Puma</h3>
            <p>Unisex Logo T-shirt</p>
            <p class="pris">DKK 400,-</p>
          </article>
        </template>


{id: 1163, gender: 'Men', category: 'Apparel', subcategory: 'Topwear', articletype: 'Tshirts', …}
articletype: "Tshirts"
brandname: "Nike"
category: "Apparel"
discount:null
gender: "Men"
id: 1163
price: 895
productdisplayname: "Sahara Team India Fanwear Round Neck Jersey"
productionyear: 2011
season: "Summer"
soldout: 0
subcategory: "Topwear"
usagetype: "Sports" */
