import { productsInVsc } from "./data.js";
console.log(productsInVsc)

const products = JSON.parse(localStorage.getItem("products")) || productsInVsc;

const containerProducts = document.querySelector('.container-products');
console.log(containerProducts)

const showVideos = (container, productsList) => {
  // container.innerHTML = "";

  productsList.forEach((product) => {
    container.innerHTML += `
          <tr class="btn-delete">
            <td> ${product.name} </td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>${product.category}</td>
            <td class="btn-edit" data-edit="edit" id=${product.id}><i data-edit="edit" id=${product.id} class="fa-solid fa-pen-to-square"></i></td>
            <td  data-product="product" id=${product.id}> <button><i data-product="product" id=${product.id} class="fa-solid fa-trash btn-delete"></i></button></td>
          </tr>
  `})
}
showVideos(containerProducts, products);



const form = document.querySelector(".form-new-product");
console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name");
  const price = document.getElementById("price");
  const quantity = document.getElementById("quantity");
  const category = document.getElementById("category");

  const arrayInput = [
    name.value,
    price.value,
    quantity.value,
    category.value,

  ];

  const lastProduct = products.length;
  const nextProduct = lastProduct + 1;
  let newProduct = {
    id: nextProduct,
    name: `${name.value}`,
    price: `${price.value}`,
    quantity: `${quantity.value}`,
    category: `${category.value}`
  };

  const validate = (array) => {
    array.forEach((input) => {
      if (input == "") {
        console.log(true)
        newProduct = ""
        Swal.fire({
          title: "Existen campos vacios. Por favor diligenciar todos los campos",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "El nuevo producto ha sido creado exitosamente",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  }

  console.log(validate(arrayInput));

  console.log(typeof (newProduct))

  if (typeof (newProduct) == 'object') {
    console.log("siii")

    console.log(products.push(newProduct));
  localStorage.setItem("products", JSON.stringify(products));
  }
  //  console.log(newProduct)
  //  console.log(videos);


  form.reset();
  location.reload();

})

// const buttonDelete = document.querySelector('.btn-delete');
// console.log(containerProducts)
