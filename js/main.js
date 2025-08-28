function copyToClipboard(s) {
  navigator.clipboard.writeText(`${s}`);
  showToast(`Copied!`);
}
function showToast(message) {
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.classList.add('toast', 'show');
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
