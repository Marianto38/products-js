
import { productsInVsc } from "../scripts/data.js";
console.log(productsInVsc)

document.addEventListener("click", (event) => {
  // event.preventDefault();
  console.log(event.target);
//indico el atributo donde quiero escuchar el click
  const productTarget = event.target.getAttribute("data-product");
  if (productTarget === "product") {
    // event.preventDefault();
    console.log("voy a borrar");

    const productId = event.target.getAttribute("id");

    console.log(productId)

    localStorage.removeItem("products", JSON.stringify(productId));
    }
});
