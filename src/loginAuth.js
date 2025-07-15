import { googleSignIn, onUserChanged } from "./firebaseAuth";

const modal = document.querySelector('#loginModal');
const profileBtn = document.querySelector('#openModal');
const avatar = document.querySelector('#userAvatar');
const adminEmail = 'joven.serdanbataller21@gmail.com';

// ────────────────────────────────────────── loginProcess
document.querySelector('#googleBtn').addEventListener("click", async function() {
  const user = await googleSignIn();
  modal.classList.add('hidden');
  modal.classList.remove('flex');
});

// ────────────────────────────────────────── userButtonModification
onUserChanged(user => {
  const onAdminPage = location.pathname.endsWith('admin.html');
  const onIndexPage = !onAdminPage;

  if(user) {
    profileBtn.classList.add('hidden');
    avatar.src = user.photoURL;
    avatar.title = user.displayName;
    avatar.alt = user.displayName || 'Profile';
    avatar.classList.remove('hidden');

    const isAdmin = user.email?.toLowerCase() === adminEmail;

    if (isAdmin && onIndexPage) location.replace('admin.html');
    if (!isAdmin && onAdminPage) location.replace('index.html');

  } else {
    profileBtn.classList.remove('hidden');
    avatar.classList.add('hidden');

    if (onAdminPage) location.replace('index.html');
  }
});