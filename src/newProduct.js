import { app } from "./firebaseAuth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(app);

// ──────────────────────────────────────────submitNewProduct
const productImage = document.querySelector('#productImage');
const productTitle = document.querySelector('#productTitle');
const productPrice = document.querySelector('#productPrice');

document.querySelector('#submitProduct').addEventListener("click", async () => {
  const file = productImage.files[0];
  const title = productTitle.value.trim();
  const price = Number(productPrice.value) * 100;

  console.log({ file, title, price });

  if (!file || !title || !productPrice.value.trim()) {
    return alert("Please complete all fields.");
  }

  try {
    const imageUrl = await uploadToImgur(file);

    await addDoc(collection(db, "products"), {
      title,
      price,
      imagePath: imageUrl,
      createdAt: Date.now(),
    });

    alert("Product Addition Succesful!");
    productImage.value = "";
    productTitle.value = "";
    productPrice.value = "";
  } catch (err) {
    console.error(err);
    alert("Save Unsuccesful");
  }
});

async function uploadToImgur(file) {
  const clientId = import.meta.env.VITE_IMGUR_CLIENT_ID;
  console.log("Client ID:", clientId);

  const formData = new FormData();
  formData.append("image", file);
  

  const res = await fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: {
      Authorization: `Client-ID ${clientId}`,
    },
    body: formData,
  });

  const json = await res.json();
  if (!json.success) throw new Error(json.data.error);

  return json.data.link;
}
