import { googleSignOut } from "./firebaseAuth";

window.addEventListener('DOMContentLoaded', () => {
  const signoutBtn = document.querySelector('#googleSignOutBtn');
  signoutBtn.addEventListener('click', async () => {
    await googleSignOut();
    location.replace('index.html');
  });
});