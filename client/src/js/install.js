const butInstall = document.getElementById('buttonInstall');

// Prompts For Installation
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

// Installs App
butInstall.addEventListener("click", async () => {
	const promptEvent = window.deferredPrompt;
	if (!promptEvent) {
		return;
	}
	promptEvent.prompt();
	window.deferredPrompt = null;
	butInstall.classList.toggle("hidden", true);
});

window.addEventListener('appinstalled', (event) => {console.log('App Installed');});