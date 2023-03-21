
console.log("conect edit")
import { productsInVsc } from "../scripts/data.js";
console.log(productsInVsc)

const products = JSON.parse(localStorage.getItem("products")) || productsInVsc;



document.addEventListener("click", (event) => {
  // event.preventDefault();
  console.log(event.target);

//indico el atributo donde quiero escuchar el click
  const productTarget = event.target.getAttribute("data-edit");
  if (productTarget === "edit") {
    // event.preventDefault();
    console.log("voy a editar");
    window.location.href = "./pages/edit.html";

    const productId = event.target.getAttribute("id");

    console.log(productId)
    const productsEdit = JSON.parse(localStorage.getItem("products"))
    console.log(typeof(productsEdit))
    console.log(productsEdit)
    const productFiltered = productsEdit.find((e) => e.id == productId)
    console.log(productFiltered)
    console.log(productFiltered.name)

    const containerForm = document.querySelector('.container-form-edit')
    console.log(containerForm)
    // containerForm.innerHTML = "";
    const article = containerForm.createElement('article');
    console.log(article)
    article.innerHTML +=
    `<form class="form-edit-product">
    <label for="name">Nombre del producto:</label>
    <input id="name" type="text" placeholder="ssss">
    <label for="price">Precio del producto:</label>
    <input id="price" type="text" placeholder="Ingrese el precio del producto">
    <label for="quantity">Cantidad del producto</label>
    <input type="number" id="quantity" placeholder="Ingrese cantidad del producto">
    <label for="category">Categoría</label>
    <select id="category">
        <option value="">Asignar Categoría</option>
        <option value="Alimentos">Alimentos</option>
        <option value="Electrodomesticos">Electrodomesticos</option>
        <option value="Juguetes">Juguetes</option>
        <option value="Computación">Computación</option>
    </select>
    <button type="submit">CREAR PRODUCTO</button>
    </form>`

    }
});
