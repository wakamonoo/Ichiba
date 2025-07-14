import { googleSignIn, googleSignOut, onUserChanged } from "./firebaseAuth";

const modal = document.querySelector('#loginModal');
const profileBtn = document.querySelector('#openModal');
const avatar = document.querySelector('#userAvatar');

// ────────────────────────────────────────── loginProcess
document.querySelector('#googleBtn').addEventListener("click", async function() {
  const user = await googleSignIn();
  modal.classList.add('hidden');
  modal.classList.remove('flex');

  if(user.email === "joven.serdanbataller21@gmail.com") {
    window.location.href = 'admin.html';
  } else {
    window.location.href = 'index.html';
  }
});

// ────────────────────────────────────────── userButtonModification
onUserChanged(user => {
  if(user) {
    profileBtn.classList.add('hidden');
    avatar.src = user.photoURL;
    avatar.title = user.displayName;
    avatar.alt = user.displayName || 'Profile';
    avatar.classList.remove('hidden');
  } else {
    profileBtn.classList.remove('hidden');
    avatar.classList.add('hidden');
  }
});