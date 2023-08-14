let deferredPrompt;

const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  // Remove the hidden attribute to show the button
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
  // Show the install prompt
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  // Hide the install button
  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  // Clear the deferredPrompt so it can be garbage collected
  window.deferredPrompt = null;
});
