const butInstall = document.getElementById("buttonInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredInstallPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredInstallPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredInstallPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  window.deferredInstallPrompt = null;
  console.log("Successfully Installed Application", event);
});
