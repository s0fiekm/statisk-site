//https://kea-alt-del.dk/t7/api/products?limit=10

fetch("https://kea-alt-del.dk/t7/api/products")
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
  copy.querySelector("h3").textContent = product.brandname;
  copy.querySelector("p").textContent = product.productdisplayname;
  copy.querySelector(".pris").textContent = product.price;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy
    .querySelector(".readMore")
    .setAttribute("href", `product.html?id=${product.id}`);
  /*
  //sold out
  if (product.discount) {
    copy.querySelector("article").classlist.add("soldOut");
  }
*/
  //appende
  document.querySelector("main").appendChild(copy);
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
