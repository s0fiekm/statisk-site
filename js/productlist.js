//https://kea-alt-del.dk/t7/api/products?limit=100

const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");

fetch("https://kea-alt-del.dk/t7/api/products?brandnames=" + brandname)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
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

  if (product.discount !== null) {
    // Produktet er på tilbud
    // Tilføj klassen "onSale" til ".prices" containeren
    copy.querySelector(".prices").classList.add(".regularPrice");
  } else {
    // Produktet er ikke på tilbud
    // Fjern ".onSale" elementet
    copy.querySelector(".regularPrice").remove();
  }
  //appende
  document.querySelector("main").appendChild(copy);
}
