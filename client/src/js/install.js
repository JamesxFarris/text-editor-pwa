let deferredPrompt;

const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  // Remove the hidden attribute to show the button
  butInstall.removeAttribute("hidden");
});

butInstall.addEventListener("click", async () => {
  if (deferredPrompt) {
    defferedPrompt.prompt();

    // Wait for the user to accept or dismiss the prompt
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }

    // Reset the prompt
    deferredPrompt = null;

    // Hide the button
    butInstall.setAttribute("hidden", true);
  }
});

window.addEventListener("appinstalled", (event) => {
  console.log("App installed", event);
});
