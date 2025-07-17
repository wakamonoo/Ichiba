import { app } from "./firebaseAuth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

async function fetchProducts() {
  const allProducts = await getDocs(collection(db, "products"));

  const products = await Promise.all(
    allProducts.docs.map(async (doc) => {
      const data = doc.data();
      let imageUrl;

      if (
        typeof data.imagePath === "string" &&
        data.imagePath.startsWith("https")
      ) {
        imageUrl = data.imagePath;
      } else {
        alert("some images are not found, sorry!");
      }

      return {
        title: data.title,
        price: data.price,
        image: imageUrl,
      };
    })
  );
  displayProducts(products);
}

function displayProducts(products) {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.className =
      "bg-gray-300 rounded-lg shadow p-4 flex flex-col items-center";

    div.innerHTML = `<img src="${product.image}" alt="${
      product.title
    }" class="w-full h-48 object-cover rounded-lg" />
      <h3 class="text-lg font-medium mt-2">${product.title}</h3>
      <p class="text-red-600 font-semibold">₱${(product.price / 100).toFixed(
        2
      )}</p>
      <div id="transaction" class="justify-between">
      <button class="mt-2 px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">Buy</button>
      <button><i class="fas fa-cart-shopping mt-2 px-4 py-3 bg-red-500 text-white rounded hover:bg-red-600"></i></button>
    </div>`;

    list.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", fetchProducts);
