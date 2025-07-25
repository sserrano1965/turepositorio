
document.getElementById('languageSwitcher').addEventListener('change', function() {
  const lang = this.value;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
});
