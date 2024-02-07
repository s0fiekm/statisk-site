//https://kea-alt-del.dk/t7/api/brands

fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(showBrands);

function showBrands(brands) {
  brands.forEach(showBrand);
}

function showBrand(brand) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  //ændre indhold
  clone.querySelector("a").textContent = brand.brandname;
  clone.querySelector(
    "a"
  ).href = `productlist.html?brandname=${brand.brandname}`;

  //appende
  document.querySelector(".letterGroup ol").appendChild(clone);
}
